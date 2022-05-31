const en_US_in_risks_page = {
  risks: 'Risks',
  of_using_ref_finance: 'of Using Ref. finance',
  introduction:
    'Providing liquidity and/or trading on Ref Finance do not come without risks. Before interacting with the protocol, please do research and understand the risks involved.',
  general_risks_quiz: 'General Risks Quiz',
  amm_core_design: 'AMM Core Design',
  audits: 'Audits',
  audits_paragraph_2:
    'Security audits do not eliminate risks completely. Please do not supply your life savings, or assets you cannot afford to lose, to Ref Finance, especially as a liquidity provider.',
  admin_keys: 'Admin keys',
  admin_keys_paragraph_2:
    'The current DAO has 26 members. Ref Finance will be transitioning to a fully decentralized DAO.',
  admin_keys_paragraph_3:
    'Please find below the list of contracts and addresses that have directly managed or currently manage the affairs of Ref Finance.',
  address: 'Address',
  type: 'Type',
  mission: 'Mission',
  Locked: 'Locked',
  exchange_contract: 'Exchange Contract',
  table_body_tr_1:
    'Manage the Automated Market Maker functions; Swap and Provide Liquidity',
  farming_contract: 'Farming Contract',
  table_body_tr_2: 'Manage liquidity incentives',
  staking_contract: 'Staking Contract',
  table_body_tr_3: 'Mint and burn xREF, and Distribute time-based rewards',
  sputnik_dao_contract: 'Sputnik DAO Contract',
  table_body_tr_4:
    'Ensure the success of Ref by taking strategic decisions (incl. smart contract amendments)',
  table_body_tr_5:
    'Manage and allocate funds to specific community contributors',
  table_body_tr_6: 'Execute the Strategy and Roadmap',
  vesting_contract: 'Vesting Contract',
  table_body_tr_7: 'Manage REF vesting contracts of Dev DAO members',
  airdrop_contract: 'Airdrop Contract',
  table_body_tr_8: 'Manage first REF airdrop',
  near_address: 'NEAR Address',
  table_body_tr_9: 'Manage one-time bug bounty payments',
  fungible_token_contract: 'Fungible Token Contract',
  table_body_tr_10: 'Mint REF token',
  rug_pull: 'Rug pull',
  rug_pull_paragraph_1:
    'If the team behind a token, either whitelisted or not, decides to abandon its project and takes the investors’ money, the project’s token will probably be worth $0.',
  rug_pull_paragraph_2:
    'If the token is whitelisted on Ref Finance, that does not mean the project will succeed. You are responsible for doing your own due diligence of the project and should understand that crypto are very-high risk, speculative investments.',
  rug_pull_paragraph_3:
    'You should be aware and prepared to potentially lose some or all of the money invested.',
  divergence_loss: 'Divergence Loss',
  divergence_loss_paragraph_1:
    'If you provide liquidity, please do note that you can make more money by not providing liquidity.',
  divergence_loss_paragraph_2:
    'Divergence Loss is often yet inappropriately called “impermanent loss”. The adjective (impermanent) may assume or create the marketing feeling that losses are only impermanent, meaning that losses are guaranteed to be reversed, which is not true.',
  divergence_loss_paragraph_3: 'Learn more about Divergence Loss',
  staking_risks: 'Staking risks',
  staking_risks_paragraph_1:
    'When staking you use multiple smart contract products each of which has its own risks.',
  permanent_loss_of_a_peg: 'Permanent loss of a peg',
  permanent_loss_of_a_peg_paragraph_1:
    'If one of the stablecoins in the pool goes significantly down below the peg of 1.0 and never returns to the peg, it will effectively mean that pool liquidity providers hold almost all their liquidity in that currency.',
  systemic_issues: 'Systemic issues',
  systemic_issues_paragraph_1:
    'In general, DeFi or the legos of money is highly connected, meaning that one failure of its component may trigger a succession of failures.',
  systemic_issues_paragraph_2:
    'A systematic risk means that you can lose money even if the failure does not directly concern your investment/exposure.',
  systemic_issues_paragraph_3:
    'The following risks may have an impact in the liquidity pools:',
  systemic_issues_paragraph_4: 'Smart contract issues with lending protocols',
  systemic_issues_paragraph_5: 'Smart contracts issues with staking protocols',
  systemic_issues_paragraph_6:
    'Systemic issues with the stablecoins in those pools',
  systemic_issues_paragraph_7:
    'Systemic issues with ERC20-native tokens in those pools',
  crypto_trading_addiction: 'Crypto trading addiction',
  crypto_trading_addiction_paragraph_1:
    'Trading crypto can be very addictive and, according to many sources, be a form of gambling addiction, which can destroy lives.',
  crypto_trading_addiction_paragraph_2:
    'Please find below a collection of stories relating to that matter.',
  crypto_trading_addiction_paragraph_3:
    "'Trading is gambling, no doubt about it'",
  crypto_trading_addiction_paragraph_4:
    "'I Lost Half a Million Pounds Trading Bitcoin'",
  crypto_trading_addiction_paragraph_5:
    "'We Spoke to a Therapist Who Treats Cryptocurrency Trading Addiction'",
  crypto_trading_addiction_paragraph_6:
    "'I lost millions through cryptocurrency trading addiction'",
  no_in_progress: 'No (In Progress)',
  yes: 'Yes',
  no: 'No',
  NA: 'N/A',
  ref_finance_near: 'ref-finance.near',
  ref_finance_near_mission:
    'v1 (depreciated)- Manage the Automated Market Maker functions; Swap and Provide Liquidity',
  token_ref_finance_near: 'token.ref-finance.near',
  token_ref_finance_near_type: 'Fungible Token Contract',
  token_ref_finance_near_mission: 'v1 (depreciated) - Mint REF token',
  refchef_near: 'refchef.near',
  simple_address: 'Simple Address',
  refchef_near_mission: 'Manage inter-account transactions',
  ref_dev_teller_near: 'ref-dev-teller.near',
  Locked_title: 'Locked? information box: when hovering to display:',
  Locked_paragraph_1:
    'Locked contract means that there are no access keys allowing the contract code to be re-deployed.',
  Locked_paragraph_2: 'In general case, the code can be re-deployed by:',
  Locked_paragraph_3: '1. a transaction with a deploy-code action',
  Locked_paragraph_4:
    '2. the contract itself can implement a function call that will trigger deploy-code action',
  Locked_paragraph_5:
    'To re-deploy the code with a transaction, the transaction has to be signed with a full-access key. If there is no such key on the contract, there is no way to re-deploy the code unless there is a dedicated support in the contract code itself, and thus we mark such contracts as locked.',
  Locked_paragraph_6:
    'If there is at least one full-access key registered on the contract account, the contract is not locked.',
  audited_first_sentence:
    'Ref Finance smart contracts are being audited by <label class="underline cursor-pointer text-riskTextColor hover:text-white" onclick=' +
    "window.open('https://jitadigital.com/')" +
    '>Jita</label>. Ref Finance will actively look for a second independant audit once the first audit is completed.',
  admin_first_sentence:
    'Ref Finance is managed by the <label class="underline cursor-pointer text-riskTextColor hover:text-white" onclick=' +
    "window.open('https://app.astrodao.com/dao/ref-finance.sputnik-dao.near')" +
    '>Ref Finance Sputnik DAO</label>. There are <label class="underline cursor-pointer text-riskTextColor hover:text-white" onclick=' +
    "window.open('https://gov.ref.finance/t/introducing-the-guardians/253')" +
    '>Guardians</label>, specific NEAR addresses, which are able to pause the contract. Only the DAO can resume the contract, at any time.',
  risks_of_using_ref_finance:
    '<label class="text-greenColor">Risks</label> of Using Ref. finance',
  admin_sentence_1:
    'Ref Finance is managed by the  <label class="underline cursor-pointer text-riskTextColor hover:text-white" onclick=' +
    "window.open('https://app.astrodao.com/dao/ref-finance.sputnik-dao.near')" +
    '>Ref Finance Sputnik DAO</label> and will be transitioning to a fully decentralized DAO.',
  admin_sentence_2:
    'For more information relating to the contracts and addresses that have directly managed or currently manage the affairs of Ref Finance, please check our <label class="underline cursor-pointer text-riskTextColor hover:text-white" onclick=' +
    "window.open('https://guide.ref.finance/developers/contracts')" +
    '>Documentation</label>.',
};
const en_US = {
  deposit: 'Deposit',
  Deposit: 'Deposit',
  withdraw: 'Withdraw',
  Withdraw: 'Withdraw',
  withdraw_token: 'Withdraw Token',
  swap: 'Swap',
  Swap: 'Swap',
  exchange_tokens: 'Exchange Tokens',
  pool: 'Pool',
  Pool: 'Pool',
  pools: 'Pools',
  Pools: 'Pools',
  Quiz: 'Quiz',
  no_tokens_deposited: 'No Tokens Deposited',
  view_pools: 'View Pools',
  view_pool: 'View Pool',
  add_token: 'Add Token',
  Add_Token: 'Add Token',
  create_new_pool: 'Create new pool',
  Create_New_Pool: 'Create New Pool',
  your_liquidity: 'Your Liquidity',
  Your_Liquidity: 'Your Liquidity',
  farms: 'Farms',
  Farms: 'Farms',
  airdrop: 'Airdrop',
  Airdrop: 'Airdrop',
  docs: 'Docs',
  Docs: 'Docs',
  community: 'Community',
  Community: 'Community',
  more: 'More',
  More: 'More',
  account: 'Account',
  Account: 'Account',
  New_ui: 'New UI',
  Risks: 'Risks',
  Forum: 'Forum',
  Discord: 'Discord',
  Telegram: 'Telegram',
  Twitter: 'Twitter',
  Medium: 'Medium',
  move_assets_to_from_ethereum: 'Move assets to/from Ethereum',
  rainbow_bridge: 'Rainbow Bridge',
  deposit_to_swap: 'Deposit to Swap',
  connect_to_near: 'Connect to NEAR',
  slippage: 'Slippage tolerance',
  slippage_title: 'Transaction Settings',
  minimum_received: 'Minimum received',
  swap_rate: 'Swap rate',
  swap_rate_pre: 'Swap rate',
  pool_fee: 'Pool fee',
  balance: 'Balance',
  from: 'From',
  to: 'To',
  submit: 'Submit',
  wrapnear: 'Wrap NEAR',
  wrapnear_tip_one: 'Wrapping NEAR allows you to trade on REF. Make sure to ',
  wrapnear_tip_two: 'leave 0.5 NEAR',
  wrapnear_tip_three: ' for gas fees.',
  wrap_error_msg: 'Not enough balance',
  sign_out: 'Sign Out',
  view_account: 'View Account',
  deposit_to_swap_and_add_liquidity: 'Deposit to swap and add liquidity',
  small_storage_fee_is_applied_of: 'Small storage fee is applied of',
  liquidity: 'Liquidity',
  tokens: 'Tokens',
  fee: 'Fee',
  fees: 'Fees',
  view_detail: 'View detail',
  pool_details: 'Pool details',
  details: 'Details',
  detail: 'Detail',
  liquidity_pools: 'Liquidity Pools',
  minimum_tokens_out: 'Minimum received',
  pair: 'Pair',
  tvl: 'TVL',
  search_pools: 'Search Pool',
  add_liquidity: 'Add Liquidity',
  remove_liquidity: 'Remove Liquidity',
  total_liquidity: 'Total liquidity',
  coming_soon: 'Coming soon',
  accumulated_volume: 'Accumulated Volume',
  underlying_liquidity: 'Underlying liquidity',
  total_shares: 'Total shares',
  my_shares: 'Shares',
  token: 'Token',
  enter_token_address: 'Enter token address',
  you_are_not_providing_liquidity_to_any_pools:
    'You aren’t providing liquidity to any pools',
  remove: 'Remove',
  select: 'Select',
  select_token: 'Select Token',
  basis_points: 'Basis points',
  total_fee: 'Total fee % ',
  protocol_fee_is: 'protocol fee is ',
  start_in: 'Start in',
  start_at: 'Start at',
  started_at: 'Started at',
  start_date: 'Start date',
  end_at: 'End at',
  end_date: 'End date',
  earn: 'Earn',
  ended: 'ENDED',
  pending: 'PENDING',
  rewards_per_week: 'Rewards per week',
  apr: 'APR',
  total_staked: 'Total staked',
  unclaimed_rewards: 'Unclaimed rewards',
  claim: 'Claim',
  claim_all: 'Claim All',
  stake: 'Stake',
  unstake: 'Unstake',
  your_rewards: 'Your rewards',
  your_shares: 'Shares',
  shares_owned: 'Shares Owned',
  stake_your_liquidity_provider_LP_tokens:
    'Stake your Liquidity Provider (LP) tokens',
  go_to_wallet: 'Go to Wallet',
  recent_activity: 'Recent Activity',
  view_all: 'View All',
  cancel: 'Cancel',
  claim_ref_token: 'Claim Ref Token',
  has_no_available_claim: 'has no available claim',
  sorry: 'Sorry',
  total_ref_token: 'Total Ref Token',
  locking_ref_token: 'Locked Ref Token',
  unclaim_ref_token: 'Unclaimed Ref Token',
  unlocked: 'Unlocked',
  locking: 'Locked',
  you_can_claim_from: 'You can claim from',
  you_have_claimed_all_your_rewards: 'You have claimed all your rewards',
  ends_in: 'Ends in',
  days: 'days',
  swap_successful_click_to_view: 'Swap successful. Click to view',
  claim_successful_click_to_view: 'Claim successful. Click to view',
  claim_failed_click_to_view: 'Claim failed. Click to view',
  slippageCopyForMobile:
    'Slippage means the difference between what you expect to get and what you actually get due to other executing first',
  slippageCopy:
    'Slippage means the difference between what you expect to get and what you actually get due to other executing first',
  depositCopy:
    'This deposits your selected tokens into the <br> exchange for swapping or adding to a liquidity pool',
  nearDepositCopy:
    'This first wraps then deposits your Ⓝ into the <br> exchange for swapping or adding to a liquidity pool',
  nearWithdrawCopy:
    'This will first unwrap your Ⓝ then withdraw it from <br> the exchange and move the tokens to your wallet',
  withdrawCopy:
    'This will withdraw your selected tokens from <br> the exchange and deposit them into your wallet',
  registerToken:
    'This registers a new token with the <br> exchange that is not already listed',
  whitelistTokenCopy: 'Add any NEP-141 token',
  addLiquidityPoolCopy:
    'This creates a new liquidity pool for the two tokens selected. The fee is the percentage the pool takes from each transaction',
  swapCopy:
    'Swap exchanges the first selected token with the second <br> selected token.The pools with the highest available liquidity and the lowest exchange fee will be used',
  addTokenCopy: 'Add any NEP-141 token',
  getLPTokenCopy: 'Click here to jump to the corresponding pool',
  airdropCopy:
    ' Please claim your airdrop at least once before the expiration date otherwise your balance would be donated into the treasury',
  farmRewardsCopy: 'Indicative value based on prices and not actual execution',
  totalValueLockedCopy: 'Total Value Locked',
  topPoolsCopy: 'For every pair, only display the highest pool TVL',
  you_do_not_have_enough: "You don't have enough",
  must_provide_at_least_one_token_for: 'Must provide greater than 0 token for',
  is_not_exist: 'is not exist',
  must_input_a_value_greater_than_zero: 'Must input a value greater than 0',
  amount_must_be_not_greater_your_balance:
    'Amount must be not greater than your balance ',
  no_pool_available_to_make_a_swap_from:
    'No pool available to make a swap from',
  for_the_amount: 'for the amount',
  no_pool_eng_for_chinese: ' ',
  is_not_a_valid_swap_amount: 'is not a valid swap amount',
  not_nep_address:
    'The address you entered is not a NEP-141 address, please check and enter it again. If it is another mainnet contract, go to Rainbow Bridge for bridging processing',
  not_correct_address:
    'The address you entered is incorrect, please check and enter',
  popular_tokens: 'Common Tokens',
  asset_label: 'Asset',
  account_label: 'Account',
  total_label: 'Total',
  top_pools: 'Top pools',
  pool_id: 'Pool ID',
  more_pools: 'More pools',
  my_watchlist: 'My Watchlist',
  h24_volume: '24h volume',
  volume: 'Volume',
  hide_low_tvl_pools: 'Hide low TVL',
  watchlist_title: 'My watchlist on the top',
  add_watchlist: 'Add Watchlist',
  remove_watchlist: 'Remove Watchlist',
  my_watchlist_copy: 'Marked pools will appear here',
  search_token: 'Search token',
  language: 'Language',
  deposit_to_add_liquidity: 'Deposit to Add Liquidity',
  slip_warn: 'Be careful, please check the minimum you can receive',
  slip_invalid: 'The slippage tolerance is invalid',
  input_to_search: 'Input to search',
  click_search_bar_to_search: 'Click search bar to search',
  reward_tokens: 'Reward tokens',
  detail_tip: 'Detail',
  no_data: 'No Data',
  stable_swap: 'StableSwap',
  StableSwap: 'StableSwap',
  exchange_rate: 'Exchange rate',
  including_fees: '(including fees)',
  standard_gas: 'Standard Gas fee:',
  rst_token: 'Your RST token',
  remove_tip: 'No fee in removing liquidity by share',
  share_liquidity: 'Share of liquidity',
  remove_token_confirm: 'You will remove RUST token',
  remove_as_one_token: 'Remove as one token',
  flexible_tip: 'Remove how much you want per token',
  add_type_all: 'Add all tokens in a balanced proportion',
  add_type_max: 'Use maximum amount of tokens available',
  select_balance: 'Select balance',
  selectBalanceCopy:
    'Select [NEAR wallet] to swap directly tokens available in your NEAR wallet',
  near_wallet: 'NEAR wallet',
  ref_account: 'REF account',
  swap_tip: 'Swap from your REF account by selecting REF account in settings',
  attention: 'Attention',
  live: 'Live',
  ended_search: 'Ended',
  my_farms: 'Your Farms',
  staked_only: 'Staked',
  sort_by: 'Sort by',
  your_farms_rewards: 'Your Farms Rewards',
  your_farms: 'Your farms',
  new: 'Latest',
  unstake_tip_t: 'you have rewards unclaimed...',
  unstake_tip_m:
    'Unstaking will remove the stake from all active and pending farms of the same pair.',
  unstake_tip_b: 'Do you want to unstake?',
  value_rewards: 'Claimed rewards',
  stake_unstake_tip:
    'Staking or unstaking will automatically claim your rewards.',
  over_tip: 'To optimise gas fee, you can withdraw up to 5 tokens at a time',
  no_token_tip: 'No reward token',
  getToken_tip: 'You can claim your rewards or stake your LP Tokens now!',
  in_farm: 'in Farm',
  swap_rate_including_fee: 'Swap rate (including fees)',
  by_share: 'By Share',
  by_token: 'By Token',
  your_positions_will_be_displayed_here:
    'Your position(s) will be displayed here.',
  price_impact: 'Price impact',
  shares_left: 'Shares left',
  total_stable_coins: 'Total stablecoins',
  daily_volume: 'Daily volume',
  liquidity_utilisation: 'Liquidity utilisation',
  token_reserves: 'Stats',
  roi_calculator: 'ROI Calculator',
  lp_staked: 'LP staked',
  usd: 'USD',
  lp_token: 'LP token',
  stake_for: 'Duration',
  day_1: '1D',
  day_2: '7D',
  day_3: '30D',
  day_4: '90D',
  day_5: '1Y',
  cur_apr: 'ROI',
  reward_token: 'Reward tokens',
  get_lp_token: 'Get LP shares',
  calculate_roi: 'ROI calculator',
  rewards_claimed: 'Rewards claimed',
  value_rewards_token: 'Value of rewards',
  all: 'All',
  all_5: 'Max 5 tokens at a time',
  insufficient_shares: 'Insufficient shares',
  shares_removed: 'Shares',
  shares_avaliable: 'Shares avaliable',
  minimum_shares: 'Minimum shares',
  shares_tip: 'Shares available / Total shares',
  stablecoin_only: 'Stablecoin only',
  more_than: 'Please input number that more than or equal to 0.01',
  less_than: 'Please input number that less than 20',
  no_valid: 'Please input valid number',
  lp_fee: 'LP fee',
  protocol_fee: 'Protocol fee',
  referral_fee: 'Referral fee',
  total_fee_create: 'Total fee',
  xref_title: 'EARN MORE BY',
  xref_title1: 'Earn more',
  xref_title2: 'by staking REF for xREF',
  xref_introdution:
    'By staking REF, you have the opportunity to earn fees generated by the protocol. Any REF holders can have a share in the revenue earned by Ref Finance.',
  staking_apr: 'Staking APR',
  view_stats: 'View Stats',
  xref: 'xREF',
  ref: 'REF',
  more_than_general_seed: 'Input must be greater than or equal to 0.000001',
  more_than_stable_seed: 'Input must be greater than or equal to 1',
  are_you_sure: 'Are you sure',
  price_impact_is_about: 'Price impact is about',
  yes_swap: 'Yes, swap',
  amount_must_be_greater_than_0: 'amount must be greater than 0',
  volume_ratio: '24h Volume/ Liquidity ratio',
  go_to_near_wallet: 'Go to NEAR Wallet',
  into_ref_account: 'into your REF account.',
  deposit_into_ref_account: 'into your REF account to add liquidity',
  deposit_near_tip: 'To deposit, keep at least 1 NEAR to cover gas fee',
  input_greater_than_available_shares: 'Input greater than available shares',
  number_of_unique_stakers: 'Number of Unique Stakers',
  total_ref_staked: 'Total REF Staked',
  total_xref_minted: 'Total xREF Minted',
  protocol_projected_revenue: 'Revenue Shared with xREF Holders',
  total_fee_Revenue_shared_with_xref_holders:
    'Total Fee Revenue Shared with xREF Holders',
  provision_treasury: 'Provision Treasury',
  protocol_projected_revenue_tip:
    'This number corresponds to the cumulative shared trading fee revenue to xREF holders. It is equal to 75% of the total platform fee revenue. It will differ from the actual REF token buyback amount due to price fluctuations.',
  stake_ref_to_xref_for_earning_more: 'Stake REF to xREF for earning more!',
  auto_router: 'Auto Router',
  auto_router_detail_sub_1: 'This route optimizes your swap by',
  auto_router_detail_sub_2: 'considering all pools for the same pair.',
  auto_router_detail_sub_3: 'Details:',
  introducing_parallel_swap: 'Introducing Parallel Swap',
  at_least: 'At least',
  xref_start_time: 'Starts on 1am UTC, 18th Jan, 2022.',
  xref_to_receive: 'xREF to receive',
  ref_to_receive: 'REF to receive',
  more_expensive_than_best_rate_en: 'more expensive than the best rate',
  optimal_path_found_by_our_solution: 'Optimal path found by our solution',
  check_to_stable_banner: 'Check',
  rates_to_stable_banner: 'Rates',
  make_sure_you_understand_what_you_do: 'Make sure you understand what you do',
  go_to_your_account_to: 'Go to your account to',
  deposit_l: 'deposit',
  withdraw_l: 'withdraw',
  got_it: 'Got it',
  check_the_transaction_settings: 'Check the transaction settings',
  filter_by: 'Filter by',
  allOption: 'All',
  stablecoin: 'Stablecoin',
  near_ecosystem: 'Near ecosystem',
  bridged_tokens: 'Bridged tokens',
  gaming: 'Gaming',
  nft: 'NFT',
  bridge: 'Bridge to/from',
  from_ethereum: 'Ethereum',
  from_aurora: 'Aurora',
  from_solana: 'Solana',
  from_terra: 'Terra',
  from_celo: 'Celo',
  no_result: 'Sorry, we couldn’t find any farm',
  multiple: 'Multiple',
  default: 'Default',
  vi_go_live: 'Vietnamese goes live!',
  do_not_need_to_deposit_in_ref:
    "You don't need to deposit in Ref Finance anymore!",
  you_can_add_liquidity_directly:
    'You can now add liquidity directly using your NEAR wallet.',
  do_not_need_deposit_anymore: "You don't need to deposit anymore!",
  lightning_swaps: 'Lightning Swaps',
  frictionless_add_remove_liquidity:
    'Frictionless Add/Remove Liquidity Actions',
  create: 'Create',
  select_a: 'Select a',
  wallet: 'wallet',
  to_use_ref_finance: 'to use Ref.Finance',
  not_supported: 'not supported',
  installed: 'installed',
  installe_now: 'install now',
  extension: 'extension',
  first_time_using_ref: 'First time using Ref',
  learn_more: 'Learn more',
  install_sender_now: 'Install Sender Now',
  connect_to_dapps_with_one_click: 'Connect to dApps with one click',
  install: 'install',
  Connecting: 'Connecting',
  check_sender_wallet_extension: 'Please check Sender wallet extension',
  having_trouble: 'Having trouble?',
  go_back: 'Go back',
  web: 'web',
  Type: 'Type',
  click_to_view: 'Click to view',
  transaction_failed: 'Transaction failed',
  wallet_vi: ' ',
  value: 'Value',
  usd_value: 'USD value',
  sauce_note:
    'SAUCE is designed for liquidity pools with pegged assets, delivering optimal prices.',
  support_ledger: 'Support Ledger',
  initialize_account_tip: 'Please initialize your account.',
  support_ledger_tip:
    "By design, Ledger cannot handle large transactions (i.e. Auto Router: trade across multiple pools at once) because of its memory limitation. When activated, the 'Support Ledger' option will limit transactions to their simplest form (to the detriment of potential optimal prices found by our Auto Router), so transactions of a reasonable size can be signed.",
  start: 'Start',
  aprTip: 'Indicative value based on all rewards (pending and running)',
  half: 'Half',
  max: 'Max',
  ref_account_balance_tip:
    'It seems like an error occurred while adding/removing liquidity to the pool',
  ref_account_tip_2: 'You have token(s) in your REF Account',
  ref_account_tip_top: 'your token(s) may be now in your REF inner account',
  click_here: 'Click here',
  to_recover_them: 'to recover them',
  ref_account_tip_3:
    'To withdraw token(s) from your REF Account to your NEAR Wallet, please select and withdraw',
  aurora_account_tip_4:
    'To withdraw token(s) from your Mapping Account to your NEAR Wallet, please select and withdraw',
  pool_fee_cross_swap: 'Pool/Cross-chain fee',
  mapping_account: 'Mapping account',
  mapping_account_tip: 'You have token(s) in Mapping Account',
  cumulative_ref_buyback: 'Cumulative REF Buyback',
  yearly_revenue_booster: 'Yearly Revenue Booster',
  Confirm: 'Confirm',
  Request_for_Quote: 'Request for Quote',
  mapping_account_explanation:
    "A mapping address is a 'proxy address', which maps the user's NEAR account with a corresponding ETH address on Aurora.",
  buy: 'Buy',
  sell: 'Sell',
  buy_nsn: 'Buy USN',
  buy_nsn_tip: 'USN is the native stablecoin backed by the NEAR economy',
  usn_tip_one: 'USN allows you to trade on REF. Make sure to ',
  rate: 'Rate',
  name: 'Name',
  diff: 'Diff',
  best: 'Best',
  trading_fee: 'Trading fee',
  usn_successful_click_to_view: 'Trading successful. Click to view',
  awesomeNear_verified_token: 'AwesomeNear Verified Token',
  usn_fee_tip: 'Zero-fee charged by Ref, users only pay USN fee!',
  total_bitcoins: 'Total Bitcoins',
  total_usd_value: 'Total USD value',
  bitcoin_value: 'Bitcoin value',
  stable_coin_value: 'StableCoin value',
  pool_fee_apr: 'Pool fee APY',
  ref_account_balance_tip_mobile: 'You have tokens in your REF account.',
  click: 'Click',
  to_recover: 'to recover.',
  reward_apr: 'Rewards APR',
  price_board: 'Price board',
  close: 'Close',
  stake_min_deposit: 'Input must be greater than or equal to ',
  borrow: 'Borrow',
  burrow_usn_tip: 'You can borrow USN on Burrow.',
};
export default Object.assign(en_US, en_US_in_risks_page);
