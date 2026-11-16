
/* =========================================================
   MODULE 1 EXAMINATION
   File: js/module-1-quiz.js
   ========================================================= */

(() => {
    "use strict";

    const PASS_MARK = 80;
    const STORAGE_RESULT_KEY = "module1ExamResult";
    const STORAGE_PASS_KEY = "module1Passed";

    const questions = [
        {
            question: "What is the stock market?",
            options: [
                "A marketplace where shares of publicly traded companies are bought and sold",
                "A government office that creates companies",
                "A place where only banks can trade",
                "A marketplace for buying physical products only"
            ],
            answer: 0,
            explanation: "The stock market connects buyers and sellers who trade shares of publicly listed companies."
        },
        {
            question: "What is a security?",
            options: [
                "Only a share of stock",
                "A financial instrument that can represent ownership, debt, or certain financial rights",
                "A guarantee that an investment cannot lose value",
                "A document issued only by a stock exchange"
            ],
            answer: 1,
            explanation: "Security is a broad term for financial instruments such as stocks and bonds. The exact legal definition can vary by jurisdiction."
        },
        {
            question: "Which of the following is an example of an equity security?",
            options: [
                "A share of Apple stock",
                "A U.S. Treasury bill",
                "A corporate bond",
                "A mortgage payment"
            ],
            answer: 0,
            explanation: "Equity securities represent ownership in a company. Shares of stock are a common example."
        },
        {
            question: "What does a debt security generally represent?",
            options: [
                "Ownership in a company's buildings",
                "A loan made to an issuer, such as a government or corporation",
                "A right to vote in every company election",
                "A contract to buy groceries in the future"
            ],
            answer: 1,
            explanation: "Debt securities represent borrowing. The issuer generally agrees to pay interest and repay principal under the instrument's terms."
        },
        {
            question: "When an investor buys a bond, what are they generally doing?",
            options: [
                "Becoming the company's chief executive",
                "Lending money to the bond issuer",
                "Buying an option to purchase stock",
                "Buying a physical part of a stock exchange"
            ],
            answer: 1,
            explanation: "A bond investor is generally lending money to the issuer in return for payments set out in the bond terms."
        },
        {
            question: "What is a derivative?",
            options: [
                "A financial contract whose value is based on an underlying asset, benchmark, or rate",
                "A type of company employee",
                "A guaranteed dividend payment",
                "A stock exchange building"
            ],
            answer: 0,
            explanation: "A derivative gets its value from something else, such as a stock, index, commodity, currency, or interest rate."
        },
        {
            question: "What right does the buyer of a standard call option receive?",
            options: [
                "The obligation to sell the underlying asset",
                "The right, but not the obligation, to buy the underlying asset under the contract terms",
                "Ownership of the entire company",
                "A guaranteed profit at expiration"
            ],
            answer: 1,
            explanation: "A call option gives its buyer the right, but not the obligation, to buy the underlying asset at the strike price under the contract terms."
        },
        {
            question: "What right does the buyer of a standard put option receive?",
            options: [
                "The right, but not the obligation, to sell the underlying asset under the contract terms",
                "The right to receive guaranteed dividends",
                "The obligation to buy the underlying asset",
                "The right to change the company's ticker symbol"
            ],
            answer: 0,
            explanation: "A put option gives its buyer the right, but not the obligation, to sell the underlying asset at the strike price under the contract terms."
        },
        {
            question: "What is an ETF?",
            options: [
                "A company that operates a stock exchange",
                "An investment fund whose shares trade on an exchange",
                "A type of bank account that cannot lose value",
                "A contract that always expires in one day"
            ],
            answer: 1,
            explanation: "An ETF is an investment fund with shares that trade on an exchange during the trading day."
        },
        {
            question: "When you buy a share of an ETF, what do you own?",
            options: [
                "A share of the fund",
                "Direct ownership of every company in the fund",
                "The stock exchange itself",
                "A guaranteed portion of the S&P 500's profits"
            ],
            answer: 0,
            explanation: "You own a share of the ETF fund, not direct ownership of each underlying holding."
        },
        {
            question: "What is the main reason a company may sell shares to the public?",
            options: [
                "To raise capital for business activities",
                "To guarantee that its stock price will rise",
                "To eliminate all business expenses",
                "To avoid having shareholders"
            ],
            answer: 0,
            explanation: "Companies may sell shares to raise capital for expansion, products, operations, and other business needs."
        },
        {
            question: "What is the difference between a trader and an investor?",
            options: [
                "A trader generally focuses on shorter-term price movements, while an investor generally has a longer time horizon",
                "Investors can never sell their assets",
                "Traders always make money, while investors do not",
                "There is no difference in their typical time horizons"
            ],
            answer: 0,
            explanation: "Traders often focus on shorter-term price movements, while investors commonly focus on longer-term ownership and growth."
        },
        {
            question: "What does it mean to own a share of a company?",
            options: [
                "You own a small portion of the company",
                "You personally control every company decision",
                "You are guaranteed a job at the company",
                "You must manage the company's daily operations"
            ],
            answer: 0,
            explanation: "A share represents an individual unit of ownership in a company."
        },
        {
            question: "What is a shareholder?",
            options: [
                "A person or institution that owns shares in a corporation",
                "A person who only watches stock prices",
                "A stock exchange employee",
                "A person who issues government bonds"
            ],
            answer: 0,
            explanation: "A shareholder is an individual, company, or institution that owns shares in a corporation."
        },
        {
            question: "What is a ticker symbol used for?",
            options: [
                "To identify a publicly traded security",
                "To show the age of a company",
                "To calculate a company's employee count",
                "To identify the stock market's opening bell"
            ],
            answer: 0,
            explanation: "Ticker symbols are letter combinations used to identify stocks and other securities."
        },
        {
            question: "What does the ticker symbol AAPL identify?",
            options: [
                "Apple",
                "Amazon",
                "Microsoft",
                "NVIDIA"
            ],
            answer: 0,
            explanation: "AAPL is the ticker symbol for Apple."
        },
        {
            question: "What is the NYSE?",
            options: [
                "The New York Stock Exchange",
                "A type of investment account",
                "A bond issued by the U.S. government",
                "A company that manufactures computers"
            ],
            answer: 0,
            explanation: "The NYSE is a major stock exchange where listed securities are traded."
        },
        {
            question: "Which statement about NASDAQ is correct?",
            options: [
                "It is a major electronic stock exchange",
                "It is a type of bond",
                "It is only open to government employees",
                "It is another name for the NYSE trading floor"
            ],
            answer: 0,
            explanation: "NASDAQ is a major U.S. stock exchange that operates electronically."
        },
        {
            question: "What are the regular trading hours for the NYSE and NASDAQ?",
            options: [
                "9:30 AM to 4:00 PM Eastern Time, Monday through Friday, except exchange holidays and certain early closes",
                "8:00 AM to 5:00 PM Eastern Time, every day",
                "Midnight to noon Eastern Time",
                "10:00 AM to 6:00 PM Eastern Time, including weekends"
            ],
            answer: 0,
            explanation: "The regular session is generally 9:30 AM to 4:00 PM Eastern Time on weekdays, subject to exchange schedules."
        },
        {
            question: "During U.S. daylight saving time, what time does the regular U.S. stock market open in Jamaica?",
            options: [
                "8:30 AM",
                "9:30 AM",
                "10:30 AM",
                "7:00 AM"
            ],
            answer: 0,
            explanation: "Jamaica remains on UTC-5. During U.S. daylight saving time, the regular session begins at 8:30 AM in Jamaica."
        },
        {
            question: "What is pre-market trading?",
            options: [
                "Trading that takes place before the regular market session opens",
                "Trading that takes place only on weekends",
                "Trading that begins after the market closes",
                "Trading that occurs only when an IPO is launched"
            ],
            answer: 0,
            explanation: "Pre-market trading takes place before the regular trading session."
        },
        {
            question: "What is a common risk of extended-hours trading?",
            options: [
                "Lower liquidity and wider bid-ask spreads",
                "Guaranteed execution at the previous day's closing price",
                "No price movement",
                "Trading is always free of risk"
            ],
            answer: 0,
            explanation: "Extended sessions may have lower liquidity, wider spreads, and greater price fluctuations."
        },
        {
            question: "What is a bull market?",
            options: [
                "A period when market prices are generally rising",
                "A period when all stocks stop trading",
                "A period when prices are guaranteed to rise every day",
                "A period when the market is generally declining"
            ],
            answer: 0,
            explanation: "A bull market is a period when prices or the broader market are generally rising."
        },
        {
            question: "What is a bear market?",
            options: [
                "A period when market prices are generally declining",
                "A period when every company pays dividends",
                "A period when the stock exchange is permanently closed",
                "A period when prices can only move upward"
            ],
            answer: 0,
            explanation: "A bear market is a period when prices or the broader market are generally declining."
        }
    ];

    // Randomly shuffle questions and answer choices.
    const shuffle = (items) => {
        const copy = [...items];

        for (let i = copy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copy[i], copy[j]] = [copy[j], copy[i]];
        }

        return copy;
    };

    // Prevent HTML from being injected through displayed text.
    const escapeHTML = (value) =>
        String(value).replace(/[&<>"']/g, (char) => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        })[char]);

    // Examination styling.
    const style = document.createElement("style");

    style.textContent = `
        .m1-exam-overlay {
            position: fixed;
            inset: 0;
            z-index: 99999;
            background: rgba(10,20,35,.76);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 18px;
            overflow-y: auto;
        }

        .m1-exam-modal {
            background: #fff;
            color: #172033;
            width: min(900px,100%);
            max-height: 94vh;
            overflow-y: auto;
            border-radius: 14px;
            padding: 26px;
            box-shadow: 0 18px 60px rgba(0,0,0,.28);
            font-family: Arial,sans-serif;
        }

        .m1-exam-modal h2 {
            margin: 0 0 10px;
            color: #142d4e;
        }

        .m1-exam-muted {
            color: #5b6574;
        }

        .m1-exam-top {
            display: flex;
            justify-content: space-between;
            gap: 14px;
            align-items: center;
            flex-wrap: wrap;
            border-bottom: 1px solid #e5e9ef;
            padding-bottom: 14px;
            margin-bottom: 18px;
        }

        .m1-exam-question {
            border: 1px solid #e1e6ed;
            border-radius: 10px;
            padding: 16px;
            margin: 14px 0;
        }

        .m1-exam-question legend {
            font-weight: 700;
            padding: 0 5px;
        }

        .m1-exam-option {
            display: flex;
            gap: 10px;
            align-items: flex-start;
            padding: 9px 10px;
            margin-top: 5px;
            border-radius: 7px;
            cursor: pointer;
        }

        .m1-exam-option:hover {
            background: #f2f6fb;
        }

        .m1-exam-option input {
            margin-top: 4px;
        }

        .m1-exam-actions {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            margin-top: 20px;
        }

        .m1-exam-btn {
            border: 0;
            border-radius: 8px;
            padding: 11px 17px;
            font-weight: 700;
            cursor: pointer;
            background: #174a7e;
            color: #fff;
        }

        .m1-exam-btn.secondary {
            background: #e8edf3;
            color: #172033;
        }

        .m1-exam-btn:disabled {
            opacity: .55;
            cursor: not-allowed;
        }

        .m1-exam-result {
            padding: 18px;
            border-radius: 10px;
            background: #f2f6fb;
            margin: 16px 0;
        }

        .m1-exam-pass {
            color: #167443;
        }

        .m1-exam-fail {
            color: #b42318;
        }

        .m1-exam-review {
            border-top: 1px solid #dce2ea;
            padding: 13px 0;
        }

        .m1-exam-correct {
            color: #167443;
        }

        .m1-exam-wrong {
            color: #b42318;
        }

        .m1-exam-name {
            width: 100%;
            max-width: 420px;
            padding: 11px;
            border: 1px solid #bbc5d1;
            border-radius: 7px;
            font: inherit;
        }

        @media(max-width:600px) {
            .m1-exam-modal {
                padding: 18px;
            }

            .m1-exam-overlay {
                padding: 8px;
            }
        }

        @media print {
            body > *:not(.m1-exam-overlay) {
                display: none !important;
            }

            .m1-exam-overlay {
                position: static;
                background: #fff;
                padding: 0;
                display: block;
            }

            .m1-exam-modal {
                max-height: none;
                overflow: visible;
                box-shadow: none;
                width: 100%;
                padding: 0;
            }

            .m1-exam-actions {
                display: none !important;
            }
        }
    `;

    document.head.appendChild(style);

    let overlay;
    let activeQuestions = [];
    let studentName = "";

    function closeExam() {
        if (overlay) {
            overlay.remove();
            overlay = null;
            document.body.style.overflow = "";
        }

        document.removeEventListener("keydown", handleEscape);
    }

    function createModal() {
        closeExam();

        overlay = document.createElement("div");
        overlay.className = "m1-exam-overlay";

        overlay.setAttribute("role", "dialog");
        overlay.setAttribute("aria-modal", "true");
        overlay.setAttribute("aria-label", "Module 1 examination");

        overlay.innerHTML = `
            <div class="m1-exam-modal">

                <div class="m1-exam-top">

                    <div>
                        <h2>Module 1 Examination</h2>

                        <p class="m1-exam-muted">
                            Answer all ${questions.length} questions.
                            You need ${PASS_MARK}% to pass.
                        </p>
                    </div>

                    <button
                        type="button"
                        class="m1-exam-btn secondary"
                        data-action="close">
                        Close
                    </button>

                </div>

                <div id="m1-exam-content"></div>

            </div>
        `;

        overlay.addEventListener("click", (event) => {
            if (event.target === overlay) {
                closeExam();
                return;
            }

            const action = event.target.closest("[data-action]")?.dataset.action;

            if (action === "close") closeExam();
            if (action === "submit") submitExam();
            if (action === "retake") startExam();
            if (action === "print") window.print();
        });

        document.addEventListener("keydown", handleEscape);

        document.body.appendChild(overlay);
        document.body.style.overflow = "hidden";

        return overlay.querySelector("#m1-exam-content");
    }

    function handleEscape(event) {
        if (event.key === "Escape" && overlay) {
            closeExam();
        }
    }

    function startExam() {
        const content = createModal();

        activeQuestions = shuffle(questions).map((question) => {

            const shuffledOptions = shuffle(
                question.options.map((text, originalIndex) => ({
                    text,
                    originalIndex
                }))
            );

            return {
                ...question,
                options: shuffledOptions.map((item) => item.text),

                answer: shuffledOptions.findIndex(
                    (item) => item.originalIndex === question.answer
                )
            };
        });

        content.innerHTML = `

            <label for="m1-student-name">
                <strong>Student name</strong>
            </label>

            <br>

            <input
                class="m1-exam-name"
                id="m1-student-name"
                type="text"
                maxlength="100"
                autocomplete="name"
                placeholder="Enter your name"
                required
            >

            <form id="m1-exam-form">

                ${activeQuestions.map((question, index) => `

                    <fieldset class="m1-exam-question">

                        <legend>
                            ${index + 1}. ${escapeHTML(question.question)}
                        </legend>

                        ${question.options.map((option, optionIndex) => `

                            <label class="m1-exam-option">

                                <input
                                    type="radio"
                                    name="question-${index}"
                                    value="${optionIndex}"
                                >

                                <span>
                                    ${escapeHTML(option)}
                                </span>

                            </label>

                        `).join("")}

                    </fieldset>

                `).join("")}

                <p class="m1-exam-muted">
                    All questions must be answered before you submit.
                </p>

                <div class="m1-exam-actions">

                    <button
                        class="m1-exam-btn"
                        type="button"
                        data-action="submit">
                        Submit Examination
                    </button>

                    <button
                        class="m1-exam-btn secondary"
                        type="button"
                        data-action="close">
                        Close
                    </button>

                </div>

            </form>
        `;

        content.querySelector("#m1-student-name").focus();

        content.querySelector("#m1-exam-form")
            .addEventListener("submit", (event) => {
                event.preventDefault();
            });
    }

    function submitExam() {
        const content = overlay?.querySelector("#m1-exam-content");

        if (!content) return;

        const nameInput = content.querySelector("#m1-student-name");

        studentName = nameInput?.value.trim() || "";

        if (!studentName) {
            nameInput?.focus();

            nameInput?.setCustomValidity("Please enter your name.");
            nameInput?.reportValidity();

            nameInput?.addEventListener(
                "input",
                () => nameInput.setCustomValidity(""),
                { once: true }
            );

            return;
        }

        const answers = activeQuestions.map((question, index) => {

            const selected = content.querySelector(
                `input[name="question-${index}"]:checked`
            );

            return selected ? Number(selected.value) : null;
        });

        const unanswered = answers.findIndex(
            (answer) => answer === null
        );

        if (unanswered !== -1) {

            const firstMissing = content.querySelector(
                `input[name="question-${unanswered}"]`
            );

            firstMissing
                ?.closest(".m1-exam-question")
                ?.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            firstMissing?.focus({ preventScroll: true });

            return;
        }

        const correct = answers.reduce(
            (total, answer, index) =>
                total + (
                    answer === activeQuestions[index].answer ? 1 : 0
                ),
            0
        );

        const total = activeQuestions.length;

        const percentage = Math.round(
            (correct / total) * 100
        );

        const passed = percentage >= PASS_MARK;

        const result = {
            studentName,
            correct,
            incorrect: total - correct,
            total,
            percentage,
            passed,
            passMark: PASS_MARK,
            date: new Date().toISOString()
        };

        try {
            localStorage.setItem(
                STORAGE_RESULT_KEY,
                JSON.stringify(result)
            );

            if (passed) {
                localStorage.setItem(STORAGE_PASS_KEY, "true");
            } else {
                localStorage.removeItem(STORAGE_PASS_KEY);
            }

        } catch (error) {
            console.warn(
                "The exam result could not be saved in this browser.",
                error
            );
        }

        content.innerHTML = `

            <h2>Examination Results</h2>

            <p>
                <strong>Student:</strong>
                ${escapeHTML(studentName)}
            </p>

            <div class="m1-exam-result">

                <h2 class="${passed ? "m1-exam-pass" : "m1-exam-fail"}">

                    ${
                        passed
                            ? "Congratulations — You Passed!"
                            : "You Did Not Pass This Time"
                    }

                </h2>

                <p>
                    <strong>Score:</strong>
                    ${correct} out of ${total}
                </p>

                <p>
                    <strong>Percentage:</strong>
                    ${percentage}%
                </p>

                <p>
                    <strong>Required to pass:</strong>
                    ${PASS_MARK}%
                </p>

                <p>
                    <strong>Result:</strong>
                    ${passed ? "PASS" : "FAIL"}
                </p>

                <p>
                    <strong>Date:</strong>
                    ${new Date(result.date).toLocaleString()}
                </p>

            </div>

            <h3>Answer Review</h3>

            ${activeQuestions.map((question, index) => {

                const isCorrect =
                    answers[index] === question.answer;

                return `

                    <div class="m1-exam-review">

                        <p>
                            <strong>
                                ${index + 1}. ${escapeHTML(question.question)}
                            </strong>
                        </p>

                        <p class="${
                            isCorrect
                                ? "m1-exam-correct"
                                : "m1-exam-wrong"
                        }">

                            ${isCorrect ? "Correct" : "Incorrect"}

                            — Your answer:
                            ${escapeHTML(question.options[answers[index]])}

                        </p>

                        ${
                            !isCorrect
                                ? `
                                    <p>
                                        <strong>Correct answer:</strong>
                                        ${escapeHTML(question.options[question.answer])}
                                    </p>
                                `
                                : ""
                        }

                        <p class="m1-exam-muted">
                            ${escapeHTML(question.explanation)}
                        </p>

                    </div>

                `;

            }).join("")}

            <div class="m1-exam-actions">

                <button
                    class="m1-exam-btn"
                    type="button"
                    data-action="print">
                    Print / Save Result
                </button>

                <button
                    class="m1-exam-btn secondary"
                    type="button"
                    data-action="retake">
                    Retake Examination
                </button>

                <button
                    class="m1-exam-btn secondary"
                    type="button"
                    data-action="close">
                    Close
                </button>

            </div>

            <p class="m1-exam-muted">
                This result is calculated in your browser.
                It is not automatically sent to an instructor.
            </p>

        `;

        content.scrollTop = 0;

        overlay
            .querySelector(".m1-exam-modal")
            .scrollTop = 0;
    }

    // Connect the examination to the HTML button.
    document.addEventListener("DOMContentLoaded", () => {

        const startButton = document.getElementById(
            "start-module-1-exam"
        );

        if (startButton) {
            startButton.addEventListener("click", startExam);
        }

    });

})();
