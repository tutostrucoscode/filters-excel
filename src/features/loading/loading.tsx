const Loading = () => {
    return (
        <div id="loading" className="hidden" style={{ transitionDuration: '125ms' }}>
            <div className="loading-content">
                <div id="preloader">
                    <div id="preloaderContent">
                        <svg
                            className="w-[100px] h-[100px] z-10 absolute jilReJ"
                            width="87"
                            height="87"
                            viewBox="0 0 87 87"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M43.16 79.1267C63.0238 79.1267 79.1267 63.0238 79.1267 43.16C79.1267 23.2962 63.0238 7.19334 43.16 7.19334C23.2962 7.19334 7.19333 23.2962 7.19333 43.16C7.19333 63.0238 23.2962 79.1267 43.16 79.1267Z"
                                stroke="#8A8F98"
                                strokeWidth="6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M17.7316 17.7316L32.9814 32.9814"
                                stroke="#8A8F98"
                                strokeWidth="6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M53.3386 32.9814L68.5884 17.7316"
                                stroke="#8A8F98"
                                strokeWidth="6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M53.3386 53.3386L68.5884 68.5884"
                                stroke="#8A8F98"
                                strokeWidth="6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M32.9814 53.3386L17.7316 68.5884"
                                stroke="#8A8F98"
                                strokeWidth="6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M43.16 57.5467C51.1055 57.5467 57.5467 51.1055 57.5467 43.16C57.5467 35.2145 51.1055 28.7733 43.16 28.7733C35.2145 28.7733 28.7733 35.2145 28.7733 43.16C28.7733 51.1055 35.2145 57.5467 43.16 57.5467Z"
                                stroke="#8A8F98"
                                strokeWidth="6"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                    <div id="loadingText">Loading…</div>
                </div>
            </div>
        </div>
    )
}

export default Loading
