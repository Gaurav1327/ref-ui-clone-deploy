import moment from "moment";
import React, { Fragment, ReactElement, useContext, useEffect, useRef, useState } from "react";
import useSWR from "swr";
import { SolidButton } from "~components/button/Button";
import { Card } from "~components/card/Card";
import Back from "~components/icon/Back";
import Notification from "~components/icon/Notification";
import SettingsIcon from "~components/icon/SettingsIcon";
import { useWalletSelector } from "~context/WalletSelectorContext";
import { WalletContext } from "~utils/wallets-integration";

type AccountNotRegisteredProps = {
    verifyOwner: () => Promise<void>;
}

type EventListProps = {
    openSettings: () => void;
    events: any
}

type SettingsProps = {
    closeSettings: () => void;
    userDetails: any;
}

function EventList({ events, openSettings }: EventListProps) {
    const parser = new DOMParser();
    const relativeTime = new Intl.RelativeTimeFormat('en', { numeric: 'auto' })
    return <Fragment>
        <div className="">
            <div className='flex justify-between px-2 pb-4 w-80 text-white '>
                <div>
                    Notifications
                </div>
                <div onClick={openSettings} className='cursor-pointer'>
                    <SettingsIcon />
                </div>
            </div>
        <div className="flex flex-col w-80 h-96 overflow-y-scroll overflow-x-hidden">
            {
                events?.map((event: any) => {
                    return <div className='flex flex-col px-3 py-2 my-2 items-start rounded-lg bg-gray-600'>
                        <div className='text-xs text-white break-words text-left'>
                            {parser.parseFromString(event?.message,'text/html').getElementsByTagName('p')[0]?.textContent}
                        </div>
                        <div className='text-xs text-gray-300'>
                            {event?.createdAt ? moment(event?.createdAt).fromNow() : "sometime ago"}
                        </div>
                    </div>
                })
            }
        </div>
        </div>
    </Fragment>
}

function AccountNotRegistered({ verifyOwner }: AccountNotRegisteredProps) {
    return (
        <div className="flex items-center justify-center text-white w-80 h-96" >
            <span onClick={async () => await verifyOwner()}>Please sign in to register</span>
        </div>
    );
}

function Loading({ className }: { className?: string }) {
    return (
        <div className={className ?? ""}>
            <svg xmlns="http://www.w3.org/2000/svg" style={{ shapeRendering: "auto" }} width="28px" height="28px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <path d="M12 50A38 38 0 0 0 88 50A38 48 0 0 1 12 50" fill="#10b981" stroke="none">
                    <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="0 50 55;360 50 55" />
                </path>
            </svg>
        </div>
    )
}

function Settings({ userDetails, closeSettings }: SettingsProps) {
    const [loading, setLoading] = useState(false);
    const { accountId } =
    useWalletSelector();

    const optInTelegram = async() => {
        setLoading(true)
        try {
            const res =await fetch('https://poc-production.up.railway.app/users/getTelegramInvite', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    botUserName : "ref_fin_test_bot",
                    walletAddress: accountId
                }),
            })
            const data = await res.json()
            window.open(data.url)
        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false)
        }
    }
    return <Fragment>
        <div className="">
            <div className='flex gap-2 pb-2 w-80 text-white'>
                <div onClick={closeSettings} className='cursor-pointer'>
                    <Back />
                </div>
                <div>
                    Settings
                </div>
            </div>
            <div className="flex flex-col w-80 h-96 overflow-y-scroll overflow-x-hidden">
                <div className=' py-4 text-gray-100 text-sm'>
                    <div className='flex items-center justify-between w-72 m-auto'>
                        <div>
                            Enable telegram notifications
                        </div>
                        {
                            userDetails && userDetails?.telegramData && userDetails.telegramData?.length > 0 ? 
                            <div className='bg-green-400 px-2 py-1 rounded-full text-xs'>
                                Enabled
                            </div>
                            : 
                                loading ? <Loading /> : <SolidButton onClick={() => optInTelegram()} className='text-xs px-2'>
                                Opt-In
                            </SolidButton> 
                        }
                    </div>
                    <div className='flex flex-col gap-2 mt-4 w-72 m-auto'>
                        <div className="self-start">
                            Enable email notifications
                        </div>
                        {
                            userDetails && userDetails?.email ?
                            <>
                                <div className="p-2 bg-gray-900 rounded-lg text-white focus:border-gray-600 border border-gray-600">
                                    {userDetails?.email}
                                </div>
                            </>
                            : <>
                                <input className="p-2 bg-gray-900 rounded-lg text-white focus:border-gray-600 border border-gray-600" />
                                <SolidButton className="m-auto w-72">
                                    Opt-In
                                </SolidButton>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
}

export default function NotificationButton() {
    const [showNotification, setShowNotification] = useState<boolean>(false);
    const [isRegistered, setIsRegistered] = useState<any>(null);
    const [showSettings, setShowSettings] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const { globalState } = useContext(WalletContext);
    const modalRef = useRef<HTMLDivElement>();
    const isSignedIn = globalState.isSignedIn;
    const { accountId, selector } =
        useWalletSelector();

    const fetchEvents = async (accountId: string) => {
        try {
            const response = await fetch(`https://poc-production.up.railway.app/notifications/dapp/in-app`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userWalletAddress: accountId,
                    apiKey: "5yWbOW6yJkiX6m.oKcuZIP.S1i/oBg",
                    appName: "Demo App",
                }),
            })
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
        }
    }

    const { data: eventList } = useSWR(
        accountId,
        fetchEvents,
        {
            refreshInterval: 10000,
        }
    );

    console.log(eventList);
    const handleVerifyOwner = async () => {
        setLoading(true);
        const wallet = await selector.wallet();

        try {
            const owner = await wallet.verifyOwner({
                message: "test message for verification",
            });

            if (owner) {
                const res = await fetch("https://poc-production.up.railway.app/users/upsert", {
                    method: "POST",
                    body: JSON.stringify({
                        walletAddress: accountId,
                        appName: "Demo App",
                        apiKey: "5yWbOW6yJkiX6m.oKcuZIP.S1i/oBg",
                    }),
                    headers: { "Content-type": "application/json; charset=UTF-8" }
                })
                const data = await res.json()
                if (data.id) {
                    setIsRegistered(data)
                }
            }
        } catch (err) {
            console.log(err);
            const message =
                err instanceof Error ? err.message : "Something went wrong";
            alert(message);
        } finally {
            setLoading(false);
        }
    };

    const getUser = async (accountId: string) => {
        try {
            const res = await fetch("https://poc-production.up.railway.app/users/get", {
                method: "POST",
                body: JSON.stringify({
                    apiKey: "5yWbOW6yJkiX6m.oKcuZIP.S1i/oBg",
                    appName: "Demo App",
                    walletAddress: accountId,
                }),
                headers: { "Content-type": "application/json; charset=UTF-8" }
            });
            const data = await res.json();
            return data;
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (
                modalRef.current &&
                !modalRef.current.contains(event.target)
            ) {
                setShowNotification(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [])

    useEffect(() => {
        const checkIsRegistered = async () => {
            try {
                const res = await fetch("https://poc-production.up.railway.app/users/get", {
                    method: "POST",
                    body: JSON.stringify({
                        apiKey: "5yWbOW6yJkiX6m.oKcuZIP.S1i/oBg",
                        appName: "Demo App",
                        walletAddress: accountId,
                    }),
                    headers: { "Content-type": "application/json; charset=UTF-8" }
                });
                const data = await res.json();
                if (data.id) {
                    setIsRegistered(data);
                }
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        if (accountId) {
            setLoading(true);
            checkIsRegistered();
        } else {
            setIsRegistered(null)
        }
    }, [accountId])

    let content: ReactElement = null;
    if (loading) {
        content = <Loading className="flex w-80 h-96 overflow-y-scroll overflow-x-hidden items-center justify-center" />
    } else if (!showSettings) {
        content = isRegistered ? <EventList events={eventList} openSettings={() => setShowSettings(true)} /> : <AccountNotRegistered verifyOwner={handleVerifyOwner} />
    } else if (showSettings) {
        content = <Settings userDetails={isRegistered} closeSettings={() => setShowSettings(false)} />
    }

    return (
        <div ref={modalRef}>
            <div className="relative">
                <div className='cursor-pointer' onClick={() => setShowNotification(!showNotification)}>
                    <Notification />
                </div>

                {isSignedIn && showNotification &&
                    <div style={{ zIndex: 1000 }} className={`absolute top-14 pt-0 right-0 w-84`}>
                        <Card
                            className="h-[600px] bg-cardBg cursor-default shadow-4xl "
                            width='w-84'
                            padding="p-4"
                            style={{
                                border: '1px solid #415462',
                            }}
                        >
                            {content}
                        </Card>
                    </div>
                }
            </div>
        </div>
    )
}