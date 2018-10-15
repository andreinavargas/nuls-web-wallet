import enLocale from 'element-ui/lib/locale/lang/en'

const en = {
  message: {
    //public
    statusSundefined:'',
    statusS0: 'Confirming',
    statusS1: 'Confirmed',
    exitFlg0:'exiting',

    statusundefined:'',
    statusPlaceholder: 'Please select the node status',
    status0: 'Wait',
    status1: 'Active',
    status: 'All',

    sortundefined:'',
    sortPlaceholder: 'Please select the sort mode',
    sort4: 'Comprehensive',
    sort1: 'Commission',
    sort0: 'Staking',
    sort2: 'Credit',

    typeundefined:'',
    type0: 'All',
    type1: 'Reward',
    type2: 'Transfer',
    type3: 'Aliased',
    type4: 'Register',
    type5: 'Deposit',
    type6: 'Withdraw',
    type7: 'Yellow card',
    type8: 'Red card',
    type9: 'Unregister',
    type100: 'Create contract',
    type101: 'Call contract',
    type102: 'Del contract',
    type103: 'Contract transfer',

    fees:'Fee:',
    fees2:'Fee',
    remarks:'Remarks',
    copy:'Copy',
    tip:'Tip',
    transType:'TransType',
    confirm:'Confirm',
    cancel:'Cancel',
    success: 'Congratulations, operation has been succeed',
    failed: 'Sorry, failed ',
    noMoney: 'Sorry，insufficient Balance',
    noMoney1: 'The transfer amount should not exceed the available balance',
    noMoney2: 'Margin must be less than available balance',
    noData:'No data',
    back:'Back',
    inputPassword:'Please input a password',
    setPssword:'Please set the password',
    copyS:'Copy of success',
    nodeError:'Sorry, you are not connected to the node. Please check the network or modify the node address to try again.',

    null:'',
    SYS000:'Success',
    SYS001:'System error',
    SYS002:'File does not exist',
    SYS003:'Parameters are empty',
    SYS022:'Address error',
    SYS013:'Hash is incorrect',
    SYS033:'The system is synchronizing blocks, temporarily unable to trade.',
    SYS018:'Parameter error',
    // LED003:'Sorry, your credit is running low',
    // LED007:'Transaction size exceeds limitation',
    14001:'Please enter the node address to be set',
    // 91001:'Incorrect transaction type',
    // 91002:'Incorrect transfer amount',
    // 91003:'Transfer fee is incorrect',
    // 91004:'Incorrect receivables',
    // 91007:'Failure of radio Trading',
    // 91005:'Save transaction failure',
    91006:'Incorrect password',
    94001:'Please input a password',
    94007:'parameter format not correct',
    // 94008:'Notes do not contain special characters',
    // 94009:'The name of the alias is not correct',
    // 94010:'Alias has been occupied',
    // 94011:'The address has been set alias',
    94012:'The transfer address and the collection address cannot be the same',
    // 94013:'Exiting',
    // 94014:'The remark is too long',


    // 91001:'Transaction type does not exist',
    // 91002:'Transfer amount is incorrect',
    // 91003:'Transfer fee is incorrect',
    // 91004:'Incorrect payment address',
    // 91005:'Save transaction failed',
    // 91007:'Broadcast failure',
    // 94008:'Remarks cannot contain special characters',
    // 94009:'The alias format is incorrect',
    // 94010:'Alias is already occupied',
    // 94011:'The address has been set to alias',
    // 94013:'Exiting',
    // 94014:'Remarks are too long',

    ACT004:'Address wrong',
    ACT005:'Alias already exists.',
    ACT006:'Alias does not exist',
    ACT007:'The account already set an alias',
    ACT008:'Parameter error',
    ACT009:'Data parsing error',
    ACT010:'Operation is successful',
    ACT011:'The operation failure',
    ACT012:'Lack of balance',
    ACT016:'The alias format wrong',
    MB001:'Unkownmessage type',
    LEDGER002:'Repeated transactions',
    cs000:'Consenus module unknow error',
    cs005:'Commission rate error',
    cs006:'Credit ratio too low',
    cs007:'Deposit too much',
    cs008:'Deposit too much',
    cs009:'The agent is stopped',
    cs010:'The deposit was canceled before',
    cs011:'The deposit never canceled before',
    cs012:'Update deposit failed',
    MSG022:'The address is not belongs to chain',
    AL001:'Account does not exist',
    AL004:'Address wrong',
    AL010:'Operation is successful',
    AL011:'The operation failure',
    AL012:'Parameter error',
    AL013:'Delete alias error',
    LED001:'UTXO is unable',
    LED002:'UTXO status error',
    LED003:'Lack of balance',
    LED004:'Invalid input',
    LED005:'Invalid input',
    LED006:'Orphan transaction',
    LED007:'Orphan block',
    LED008:'data not found',
    LED009:'tx fee is not right',
    LED010:'Rollback Transaction tx failed',
    LED011:'transaction repeated',
    LED012:'The amount of the transfer is too small',
    LED013:'the transaction is too big',
    SYS019:'Data does not exist',
    // 94015:'Transaction confirmed',
    //
    // 100002:'Contract address does not exist',
    // 10001:'Gas parameter error',
    // 50000:'The wrong password',

    10000:'Success',
    10001:'Failed',
    10002:'Unkown Error',
    10003:'Data parse error',
    10004:'Tread name conflict',
    10005:'Lauguage type not set',
    10006:'IO error',
    10007:'Data length error',
    10008:'Configure error',
    10009:'Signature error',
    10010:'Request denied',
    10011:'The data size is too large, Recommend the single transaction amount is ',
    10012:'Parameter error',
    10013:'Parameter can not be null',
    10014:'Data error',
    10015:'Data not found',
    10016:'Download version json faild',
    10017:'Parse JSON faild',
    10018:'File operation fiald',
    10019:'Illegal access exception',
    10020:'Instantiation exception',
    10021:"It's upgrading",
    10022:"It's not upgrading",
    10023:'The version is not the newest version',
    10024:'Serialize error',
    10025:'Deserialize error',
    10026:'Hash error',
    10027:'Insufficient balance',
    10028:'The address is block hole',
    10029:'The address is not belongs to main chain',
    10030:'The Validators not fully executed',
    10031:'Block is null',

    20000:'DB module start error',
    20001:'DB error',
    20002:'Dession is not initialized.',
    20003:'Can not save NULL data',
    20004:'Batch data error',
    20005:'Data Error',
    20006:'Failed to save data',
    20007:'Failed to update data',
    20008:'Failed to rollback data',
    20009:'DB area exists',
    20010:'DB area not exists',
    20011:'Create DB area exceed limit',
    20012:'Create DB area error',
    20013:'Create DB area path error',
    20014:'Destroy DB area error',
    20015:'DB batch operation closed',
    20023:'Request denied',

    30001:'Block header sign check failed',
    30002:'Block header field check failed',
    30003:'Block field check failed',
    30004:'The block is too big',
    30005:'Merkle Hash is wrong',

    31001:'UTXO is unable',
    31002:'UTXO status error',
    31004:'Invalid input',
    31005:'Invalid output',
    31006:'Orphan transaction',
    31007:'Orphan block',
    31008:'Transaction data validation error',
    31009:'Transaction fee is not right',
    31010:'Rollback Transaction tx failed',
    31011:'Repeated transaction',
    31012:'The amount of the transfer is too small',
    31013:'The transaction data is too big',
    31014:'Save transaction failed',
    31015:'Transaction is not exist',
    31016:'Transaction coinData not found',
    31017:'Transaction type error',

    40001:'Network P2P module start error',
    40002:'Network msg error',
    40003:'Message XOR error',
    40004:'Network Message length error',
    40006:'Network group exists',
    40007:'Network area exists',
    40008:'Nestwork group not exists',
    40009:'Network area not exists',
    40010:'Network Node not exists',
    40011:'Broadcast failed',
    40012:'No network node can be broadcast',
    40013:'Network Node dead',
    40014:'Network Node channel dead',

    50000:'Password is wrong',
    50001:'Account does not exist',
    50002:'The account has been encrypted.',
    50003:'Account already exists',
    50004:'Address wrong',
    50005:'Alias already exists.',
    50006:'Alias is not exist',
    50007:'The account already set an alias',
    50008:'The account is not encrypted',
    50009:'There is another AliasTransaction set the same alias',
    50010:'Contains encrypted accounts',
    50011:'Contains unencrypted accounts',
    50012:'The private key is wrong',
    50013:'Delete alias error',
    50014:'The AccountKeystore file does not exist',
    50015:'The AccountKeystore file was damaged',
    50016:'The alias format wrong',
    50017:'The password format wrong',
    50018:'Decrypt account error',
    50019:'Account is encrypted and locked',
    50020:'Remark is too long',

    60001:'Unkown message type',

    70001:'Timeout',
    70002:'Token amount error',
    70003:'Token amount is not enough',
    70004:'Consensus meeting error',
    70005:'Commission rate error',
    70006:'Credit ratio too low',
    70007:'Deposit too much',
    70008:'Deposit too much',
    70009:'The agent is stopped',
    70010:'The deposit was canceled before',
    70011:'The deposit never canceled before',
    70012:'Update deposit failed',
    70014:'Update agent failed',
    70015:'Stop agent lock time not reached',
    70016:'Agent not exist',
    70017:'Agent exist',
    70018:'Agent punished',
    70019:'Bifurcation',
    70020:'Yellow punish tx is wrong',
    70021:'The address is a consensus seed',
    70022:'The transactions never double spend',
    70023:'Wrong red punish reason',
    70024:'Agent packing Address has been used',
    70025:'The packaging address cannot be the same as the agent address',
    70026:'The packaging address and reward addresses cannot be the same',

    80001:'Error getting P2PKH signature script',

    100001:'Contract execute error',
    100002:'Contract address not exist',
    100003:'Create contract tx error',
    100004:'Illegal contract address',
    100005:'Non-contractual transaction',
    100006:'Funds for non-contractual transaction cannot be transferred to the contract address',
    100007:'The format of the name is incorrect.',
    100008:'Non-NRC20 contract',
    100009:'Non-view method',
    100010:'Illegal contract code',
    100011:'Duplicate token name',
    100012:'The format of the symbol is incorrect.',
    100013:'Contract Locked',

    91001:'Transaction type does not exist',
    91002:'Transfer amount is incorrect',
    91003:'Transfer fee is incorrect',
    91004:'Incorrect payment address',
    91005:'Save transaction failed',
    91007:'Broadcast failure',
    94008:'Remarks cannot contain special characters',
    94009:'The alias format is incorrect',
    94010:'Alias is already occupied',
    94011:'The address has been set to alias',
    94013:'Exiting',
    94014:'Remarks are too long',
    94015:'Transaction confirmed',
    95001:'Insufficient balance',
    95002:'Too much change',
    95003:'Syncing height, temporarily unable to trade',
    SYS101:'Failed to get, please try again later',
    SYS102:'NULS testing coins distribution has ended',
    SYS103:'You have already get the testing coins, please do not apply for that more than once!',
    SYS104:'The address you entered is incorrect',
    SYS105:'Captcha error',
    SYS106:'Every Ip can only get the testing coins once!',
    nullerror:'An unknown error has occurred, please try again later',

    //top
    account: 'Wallet',
    transfer: 'Transfer',
    consensus: 'Consensus',
    browser: 'Explorer',
    testNuls:'Testnet NULS',
    set: 'Setting',
    exit: 'Exit',
    help: 'Help',
    accountBackups: 'Account backups',
    editPassword: 'Edit password',
    setAlias: 'Setting alias',
    setAliasTip:'The alias has been set up',

    //提示
    prompt:'You have not created or imported account information, please add account information first and then do it again!',

    //index
    index1:'Alias',
    index2:'---',
    index3:'Account address',
    index4:'Account assets',
    index5:'Account name',
    index6:'Total',
    index7:'Locking',
    index8:'Usable',
    index9:'Operation',
    index10:'Transfer ',
    index11:'Receivables',
    index12:'Transaction list',
    index13:'Type',
    index14:'Time',
    index15:'Change',
    index16:'State',
    index17:'Start and end date:',
    index18:'Start date',
    index19:'End date',
    index20:'Empty',

    //page
    page1:'Show',
    page2:'bar',
    page3:'All',
    page4:'data',

    //home
    home1:'Welcome to',
    home2:'A safe, efficient and concise NULS official light wallet.',
    home3:'New account',
    home4:'You can create a new account',
    home5:'Import account',
    home6:'You can import original account files to support plain private keys.',
    home7:'NULS is a customizable block chain infrastructure. It is a global block chain open source community project.',
    home8:'NULS is made up of micro kernel and function modules to weaken the new thinking of the main chain and to peel off events and services.',
    home9:'To achieve a highly modular underlying architecture, provide smart contracts, multi chain parallel, cross chain consensus and other operating mechanism, reduce the cost of development and use, and promote the commercial application process of block chain.',

    //newWallet
    newWallet: 'New wallet',
    newWalletTitle: 'Please carefully keep the current wallet password. If your wallet password is lost, it is likely to cause your assets to be lost.',
    newWalletTitle_1: 'NULS wallet does not store passwords, nor can it help you find it. Please bear in mind.',

    pass: 'Purse password:8-20 characters, letters and numbers are required, and spaces cannot be entered.',
    passTitle: 'Please input a password',
    passTitle_1: 'Please enter 8-20 characters, you need to include letters and numbers, you can not enter spaces.',
    passTwo: 'Duplicate password',
    passTwoTitle: 'Please enter the password again',
    passTwoTitle_1: 'Two input password inconsistencies',

    clauseTitle: 'I have read it carefully and agree.',
    clause: 'Services and privacy clauses',
    clauseTitle_1: 'Please read it carefully and agree' ,

    importWallet:'Import wallet',

    //makeCollections收款
    makeCollectionsTitle:'receivables',
    makeCollectionsAddress:'Account address:',
    makeCollectionsMoney:'Amount Collected:',
    makeCollectionsTips:'Note: this function requires the APP side of the wallet to scan the code, and the wallet APP is being developed. Please look forward to it.',

    //transAccount转账
    transAccountTitle:'Transfer ',
    //transAccountTips1:'Receipt address or alias: if you use alias transfer, please check the spelling carefully to avoid any problems due to aliases.',
    transAccountTips1:'Receipt address:',
    transAccountTips2:'Transfer amount:',
    transAccountTips3:'Available balance:',
    transAccountTips4:'Remarks:',
    transAccountTips5:'Fee:',
    transAccountOptions:'Advanced options',
    low:'Low',
    high:'High',
    transAccountPrice:'Custom fee unit price(NULS/kb):',
    transAccountSize:'Content size:',
    transAccountError1:'Please input the collection address.',
    transAccountError2:'Incorrect receipt address format',
    transAccountError3:'Please enter the amount of the transfer',
    transAccountError4:'The transfer amount is numeric and the maximum number is eight after the decimal point.',
    transAccountError5:'0.0001 to 0.01 formalities',
    transAccountError6:'The amount of the transfer should not be less than 0.01 NULS',
    transAccountError7:'Fee: The number of decimal places is up to six bits.',

    //transDetail交易详情
    transDetailBackName:'Transaction history',
    transDetailTitle:'Transaction info',
    transDetailInput:'Input',
    transDetailOutput:'Output',
    transDetailOverview:'Overview',
    transDetailBlockHigh:'Block height',
    transDetailDate:'Time',
    transDetailType:'Type',
    transDetailStatus:'State',

    //createWallet
    createWalletTitle1:'Congratulations! You have successfully created a new account! Please backup your account immediately!',
    createWalletTitle2:'Your account address：',
    createWalletBackups:'Backups',
    createWalletDownload1:'Clicks will be downloaded',
    createWalletDownload2:'File',
    createWalletDownload3:'Please keep it to a safe place',
    createWalletBackupsKey:'Private key backup of plaintext',
    createWalletBtn1:'Complete the backup',
    createWalletBtn2:'Confirm the risk, backup later',
    createWalletDialog1:'Private key backup',
    createWalletDialog2:'Security warning：',
    createWalletDialog3:'The private key is not encrypted, and the backup has the risk，',
    createWalletDialog4:'Please save it to a safe place and recommend using keystore for backup.',
    createWalletDialog5:'Please confirm that the private key has been backed up',
    createWalletDialog6:'Now backup',
    createWalletDialog7:'Backed up done',

    //freezeList
    freezeListBackName:'Account',
    freezeListTitle:'Freeze list',
    freezeListDate:'Time',
    freezeListHigh:'Unlock',
    freezeListAccount:'Money',
    freezeListReason :'Locking',
    consensusLocking:'Locking',

    //importKeyCode
    importKeyCode:'Import key',
    importKeyCodeLabel1:'Please enter the private key：',
    keyCodeErrorTips1:'Please enter the private key：',

    //importKeyFile
    importKeyFile1:'Import',
    importKeyFile2:'Click to browse folders',
    importKeyFile3:'Select.Keystore file import',
    importKeyErrorTips1:'Sorry, the file you chose has no content.',
    importKeyErrorTips2:'No file selection',

    //allConsensusInfo
    allConsensusInfo1:'All consensus',
    allConsensusInfo2:'Total entrustment',
    allConsensusInfo3:'Total consensus',
    allConsensusInfo4:'24 hour consensus Award',
    allConsensusInfo5:'Consensus list',
    allConsensusInfo6:'Enter the node ID, node creation address, or node packaging address search',
    allConsensusInfo7:'Search',
    //node info
    allConsensusInfo8:'Node source:',
    allConsensusInfo9:'Deposit:',
    allConsensusInfo10:'Commission:',
    allConsensusInfo11:'Participants:',
    allConsensusInfo12:'Total staking:',
    allConsensusInfo13:'Credit:',

    //myConsensus
    myConsensus1:'My consensus',
    myConsensus2:'Entrustment',
    myConsensus3:'My node',
    myConsensus4:'Total entrustment',
    myConsensus5:'Available balance',
    myConsensus6:'More',
    myConsensus7:'Total nodes',
    myConsensus8:'My involved',
    myConsensus9:'Not yet involved',
    myConsensus10:'Immediate participation',
    myConsensus11:'No result',

    //nodeDetail
    nodeDetail1:'Node',
    nodeDetail2:'Node info',
    nodeDetail3:'Create address:',
    nodeDetail4:'Reward address:',
    nodeDetail5:'Block address:',
    nodeDetail6:'Node punishment:',
    nodeDetail7:'Yellow',
    nodeDetail8:'Entrustment information',
    nodeDetail9:'All',
    nodeDetail10:'Back list',
    nodeDetail111:'Confirm',
    nodeDetail12:'Current node consensus record',
    nodeDetail13:'Append',
    nodeDetail14:'Creation date:',
    nodeDetail15:'Total reward:',
    nodeDetail16:'Staking:',
    nodeDetail17:'Please enter the staking',
    nodeDetail18:'Margin between 2000 and 500000, and eight after decimal places',
    nodeDetail19:'Unstaking',
    nodeDetail20:'Commission:',
    nodeDetailBackName:'consensus',

    //setAlias
    setAlias1:'For account security, the account alias settings will not be modified. Please proceed with caution.',
    setAlias2:'Setting an alias takes 1 NULS',
    setAlias3:'Please enter an alias:',
    setAlias4:'Only lowercase letters, digits and underlines are allowed,no more than 20 characters',
    setAlias5:'Total cost',
    setAlias6:'The alias length is 1 to 10 characters',

    //setPassword
    setPassword1:'Current password',
    setPassword2:'New password (8-20 bits, with letters and numbers, and no space).',
    setPassword3:'Confirm the new password',

    //serviceAddressList
    serviceAddressList1:'Api-server List',
    serviceAddressList2:'address',
    serviceAddressList3:'status',
    serviceAddressList4:'unused',
    serviceAddressList5:'using',
    serviceAddressList6:'delay',
    serviceAddressList7:'operation',
    serviceAddressList8:'edit',
    serviceAddressList9:'use',
    serviceAddressList10:'Newly added',
    serviceAddressList12:'The unofficial address you entered may not be used properly, so you will be responsible for the loss.',
    serviceAddressList13:'Link address:',
    serviceAddressList14:'use immediately',
    serviceAddressList15:'You can add up to 10 addresses, you can edit and modify other addresses.',
    serviceAddressList16:'Please enter the address',
    serviceAddressList17:'Please enter an address that contains HTTPS and can be used normally.',

    //help
    help1:'Common problem',
    help2:'Import account',
    help3:'Import accounts are divided into private key import and .keystore file import.',
    help20:'The private key import directly enters the plaintext private key, and then sets a password.',
    help4:'There are two types of .keystore file imports:',
    help5:'If the file itself is already encrypted, you need to enter the password you entered when encrypting.',
    help6:'If the file itself is not encrypted, you will need to enter a new password to encrypt the file.',
    help7:'Fee description',
    help8:'The transfer fee is calculated based on the transfer amount, the transaction size by the transfer* rate,',
    help23:'The rate can be adjusted by the user, and the unit price is 0.001 to 0.01 per kb.',
    help9:'In addition to deducting the handling fee, you need to deduct an additional 1nuls fee.',
    help10:'Commission',
    help11:'After the commission, the amount will be locked and cannot be used. If the delegated node is out of the block, a consensus reward will be generated.',
    help12:'Frozen amount',
    help13:'Entrustment and consensus rewards will be frozen and will be available after thawing.',
    help22:'The entrusted node is cancelled or the user voluntarily revokes the entrustment, and the entrusted amount will be unfrozen;',
    help14:'Consensus rewards need to be locked after 1000 blocks are automatically thawed.',
    help15:'For example, Zhang San obtained a consensus reward of 1nuls at a block height of 100, and was available when the block height was 1100.',
    help16:'Transfer',
    help17:'After the transfer, it will be in the confirmation status.',
    help18:'Create an agent node',
    help19:'The NULS official light wallet does not support creating agent node. Creating agent node can be found at https://nuls.io/,after downloading the full-node wallet and synchronizing the blocks, you can create nodes.',
    help21:'NULS official light wallet instruction manual',

    //testnetNuls
    testnetNuls1:'Apply For Testnet NULS',
    testnetNuls2:'Method of getting NULS:',
    testnetNuls3:'The top 100 addresses can receive 30000 NULS, after which you can receive 5000 NULS.',
    testnetNuls4:'If you need more,go to',
    testnetNuls5:'Please enter you testnet address',
    testnetNuls6:'I already know that the testnet NULS is only used for the test network and doesn\'t have any other  value. ',
    testnetNuls7:'Apply',
    testnetNuls8:'Please check out',
    testnetNuls9:'Please input address',
    testnetNuls10:'community',
    testnetNuls11:'to apply by posting reply.',
    testnetNuls12:'Please input captcha code',
    testnetNuls13:'You number is ',
    testnetNuls14:'.you have already get ',

    //bottom
    nodeAddress: 'Api-server:',
    delay: 'Delay',
    nowHeightInof: 'Current height info',
    height: 'Height:',
    outTime: 'Out time:',
    transactionNumber: 'Transaction number',
    profit: 'Profit',
    outName: 'Out name',
    termsService: 'Service agreement',
    privacyPolicy: 'Privacy policy',
    about: 'About',
  },

  ...enLocale
};
export default en