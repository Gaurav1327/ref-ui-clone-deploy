import React, { useState, useEffect } from 'react';
import { useRef } from 'react';
import { RefreshTrangle } from './Loading';

export const SwapRefresh = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <svg
        width="24"
        height="19"
        viewBox="0 0 24 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.58873 5.10344C7.28224 2.38962 10.6044 0.972593 13.8573 1.83719C16.789 2.61642 18.8493 5.03225 19.3174 7.84177"
          stroke="#7E8A93"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M19.7735 9.34647C19.485 10.0036 18.6187 10.1518 18.1281 9.62805L15.5349 6.85974C14.9904 6.27841 15.3109 5.32478 16.096 5.19043L20.2143 4.48567C20.9994 4.35131 21.6188 5.14407 21.2986 5.8734L19.7735 9.34647Z"
          fill="#00C6A2"
        />
        <path
          d="M18.4168 13.0404C16.7233 15.7542 13.4011 17.1712 10.1482 16.3066C7.21652 15.5274 5.15618 13.1116 4.68812 10.302"
          stroke="#7E8A93"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M3.39755 7.95309C3.66373 7.28662 4.5245 7.1092 5.03253 7.61608L7.84107 10.4183C8.40495 10.9809 8.11678 11.9448 7.33664 12.1056L3.05659 12.9878C2.27645 13.1486 1.6306 12.3772 1.92604 11.6375L3.39755 7.95309Z"
          fill="#00C6A2"
        />
      </svg>
    </div>
  );
};

export const CountdownTimer = ({
  loadingTrigger,
  loadingPause,
}: {
  loadingTrigger: boolean;
  loadingPause?: boolean;
}) => {
  return (
    <div className="circle_process bg-chartBg rounded-full relative flex justify-center items-center">
      <div className="circle_center bg-cardBg rounded-full inline-block flex items-center justift-center">
        {loadingPause ? (
          <div className="flex items-center mx-auto">
            <RefreshTrangle />
          </div>
        ) : (
          <div className="flex items-center mx-auto">
            <div
              className="w-0.5 h-1.5 rounded bg-gradientFrom"
              style={{
                marginRight: '1px',
              }}
            />
            <div
              className="w-0.5 h-1.5 rounded bg-gradientFrom "
              style={{
                marginLeft: '1px',
              }}
            />
          </div>
        )}
      </div>
      <div className="wrapper absolute top-0 right-0 overflow-hidden">
        <div
          className={`circle  absolute top-0 rounded-full ${
            !loadingTrigger && !loadingPause ? 'rightcircle' : ''
          }`}
        ></div>
      </div>

      <div className="wrapper absolute top-0 left-0 overflow-hidden">
        <div
          className={`circleleft absolute top-0 rounded-full ${
            !loadingTrigger && !loadingPause ? 'leftcircle' : ''
          }`}
          id="leftcircle"
        ></div>
      </div>
    </div>
  );
};
export const WarnTriangle = () => {
  return (
    <svg
      width="20"
      height="18"
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.1274 6.07879C11.1317 6.04034 11.1339 6.0013 11.1339 5.96175C11.1339 5.36616 10.6336 4.88335 10.0164 4.88335C9.39924 4.88335 8.89893 5.36616 8.89893 5.96175C8.89893 5.96298 8.89893 5.9642 8.89894 5.96543H8.89547L9.1473 11.1058C9.14727 11.1086 9.14726 11.1114 9.14726 11.1141C9.14726 11.5774 9.53639 11.9529 10.0164 11.9529C10.4964 11.9529 10.8855 11.5774 10.8855 11.1141C10.8855 11.1065 10.8854 11.0989 10.8852 11.0913L11.1274 6.07879ZM7.2833 2.47745C8.76956 0.0286533 11.1824 0.0339056 12.6655 2.47745L19.3081 13.4219C20.7943 15.8707 19.6164 17.8559 16.6693 17.8559H3.27955C0.335916 17.8559 -0.842329 15.8655 0.640741 13.4219L7.2833 2.47745ZM10.0164 15.4277C10.6336 15.4277 11.1339 14.9449 11.1339 14.3493C11.1339 13.7537 10.6336 13.2709 10.0164 13.2709C9.39924 13.2709 8.89893 13.7537 8.89893 14.3493C8.89893 14.9449 9.39924 15.4277 10.0164 15.4277Z"
        fill="#DE9450"
      />
    </svg>
  );
};
export const ErrorTriangle = ({ expand }: { expand?: boolean }) => {
  return (
    <svg
      width={expand ? '46' : '20'}
      height={expand ? '40' : '18'}
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.1274 6.07879C11.1317 6.04034 11.1339 6.0013 11.1339 5.96175C11.1339 5.36616 10.6336 4.88335 10.0164 4.88335C9.39924 4.88335 8.89893 5.36616 8.89893 5.96175C8.89893 5.96298 8.89893 5.9642 8.89894 5.96543H8.89547L9.1473 11.1058C9.14727 11.1086 9.14726 11.1114 9.14726 11.1141C9.14726 11.5774 9.53639 11.9529 10.0164 11.9529C10.4964 11.9529 10.8855 11.5774 10.8855 11.1141C10.8855 11.1065 10.8854 11.0989 10.8852 11.0913L11.1274 6.07879ZM7.2833 2.47745C8.76956 0.0286533 11.1824 0.0339056 12.6655 2.47745L19.3081 13.4219C20.7943 15.8707 19.6164 17.8559 16.6693 17.8559H3.27955C0.335916 17.8559 -0.842329 15.8655 0.640741 13.4219L7.2833 2.47745ZM10.0164 15.4277C10.6336 15.4277 11.1339 14.9449 11.1339 14.3493C11.1339 13.7537 10.6336 13.2709 10.0164 13.2709C9.39924 13.2709 8.89893 13.7537 8.89893 14.3493C8.89893 14.9449 9.39924 15.4277 10.0164 15.4277Z"
        fill="#DE5050"
      />
    </svg>
  );
};

export const TipTriangle = ({
  h,
  c,
  w,
}: {
  h?: string;
  w?: string;
  c?: string;
}) => {
  return (
    <svg
      width={w || '20'}
      height={h || '18'}
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.1274 6.07879C11.1317 6.04034 11.1339 6.0013 11.1339 5.96175C11.1339 5.36616 10.6336 4.88335 10.0164 4.88335C9.39924 4.88335 8.89893 5.36616 8.89893 5.96175C8.89893 5.96298 8.89893 5.9642 8.89894 5.96543H8.89547L9.1473 11.1058C9.14727 11.1086 9.14726 11.1114 9.14726 11.1141C9.14726 11.5774 9.53639 11.9529 10.0164 11.9529C10.4964 11.9529 10.8855 11.5774 10.8855 11.1141C10.8855 11.1065 10.8854 11.0989 10.8852 11.0913L11.1274 6.07879ZM7.2833 2.47745C8.76956 0.0286533 11.1824 0.0339056 12.6655 2.47745L19.3081 13.4219C20.7943 15.8707 19.6164 17.8559 16.6693 17.8559H3.27955C0.335916 17.8559 -0.842329 15.8655 0.640741 13.4219L7.2833 2.47745ZM10.0164 15.4277C10.6336 15.4277 11.1339 14.9449 11.1339 14.3493C11.1339 13.7537 10.6336 13.2709 10.0164 13.2709C9.39924 13.2709 8.89893 13.7537 8.89893 14.3493C8.89893 14.9449 9.39924 15.4277 10.0164 15.4277Z"
        fill={c || '#DE5050'}
      />
    </svg>
  );
};
