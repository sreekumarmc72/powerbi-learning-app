import React from "react";
import { useImmer } from "use-immer";
import "./assets/styles/styles.css";
import "./App.css";
import Answer from "./Answer";

export const App = () => {
    const [activeTab, setActiveTab] = useImmer("question");
    const handleTabClick = (tab) => {
        setActiveTab((draft) => {
            draft = tab;
            return draft;
        });
    };


    return (
        <>
            <div className="col-lg-8 mb-4 mb-lg-0 main-content">
                <div className="card tab-view-wrapper">
                    <div className="card-header border-0">
                        <div className="tab-header">
                            <div className="tabs d-flex align-items-center">
                                <div
                                    className={`tab ${activeTab === "question" ? "active" : ""}`}
                                    onClick={() => handleTabClick("question")}
                                >
                                    Question
                                </div>
                                <div
                                    className={`tab ${activeTab === "ref" ? "active" : ""}`}
                                    onClick={() => handleTabClick("ref")}
                                >
                                    Reference Image
                                </div>

                                <div
                                    className={`tab ${activeTab === "answer" ? "active" : ""}`}
                                    onClick={() => handleTabClick("answer")}
                                >
                                    Answer
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="tab-content-block">
                            <div>
                                {activeTab === "question" && (
                                    <div style={{
                                        background: "#F3F6FF",
                                        padding: "20px",
                                        marginBottom: "30px",
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center"
                                    }}>
                                        <span style={{ fontSize: "16px", fontWeight: "500" }}>Required files to complete the PowerBi task</span>
                                        <button
                                            onClick={() => {
                                                const link = document.createElement('a');
                                                link.href = process.env.PUBLIC_URL + '/files/Superstore.xls';
                                                link.download = 'Superstore.xls';
                                                link.click();
                                            }}
                                            style={{
                                                padding: "8px 20px",
                                                background: "#fff",
                                                border: "1px solid #ccc",
                                                borderRadius: "4px",
                                                cursor: "pointer"
                                            }}
                                        >
                                            Download Files
                                        </button>
                                    </div>
                                )}
                                <div
                                    className="tab-content tab-content-wrapper"
                                    style={{ display: activeTab === "question" ? "block" : "none" }}
                                >


                                    <h4><b>Scenario</b></h4>
                                    <p>
                                        You are a Business Analyst at Superstore Inc., and you have been given the task of analyzing sales performance
                                        across different regions and sales managers. Additionally, the company wants to track sales returns using
                                        cross-reporting techniques and understand how much each sales manager is responsible for in terms of returns.
                                    </p>

                                    <h4><b>Your task</b></h4>
                                    <p style={{ fontWeight: "600" }}>Using the Superstore Sales dataset, perform the following analyses in Power BI:</p>

                                    <p style={{ marginBottom: "0px" }}><b>1. Region-wise Sales Analysis</b></p>
                                    <ul>
                                        <li>Create a report showing total sales per region using appropriate visualizations.</li>
                                        <li>Identify which region has the highest and lowest sales.</li>
                                    </ul>

                                    <p style={{ marginBottom: "0px" }}><b>2. Sales Manager-wise Sales</b></p>
                                    <ul>
                                        <li>Identify the top-performing sales managers based on total sales.</li>
                                        <li>Create a table showing sales figures grouped by sales manager.</li>
                                    </ul>

                                    <p style={{ marginBottom: "0px" }}><b>3. Finding Sales Returns Using Cross Reporting</b></p>
                                    <ul>
                                        <li>Implement cross-reporting techniques to track the total value of returned sales.</li>
                                        <li>Use a separate dataset or table containing return information and link it appropriately.</li>
                                    </ul>

                                    <p style={{ marginBottom: "0px" }}><b>4. Sales Return Per Manager</b></p>
                                    <ul>
                                        <li>Find the total returns handled by each sales manager.</li>
                                        <li>Compare sales vs. returns per manager to identify trends.</li>
                                    </ul>
                                    <p style={{ marginBottom: "0px" }}><b>5. Sales Ret Rate Measure</b></p>
                                    <ul>
                                        <li>Create a measure called "Sales Ret Rate" using the formula: <b>Sales Ret Rate = [Sales Return]/SUM(Orders[Sales])</b></li>
                                        <li>Use this measure to analyze the return rate across different regions and sales managers.</li>
                                    </ul>
                                </div>
                            </div>
                            <div
                                className="tab-content"
                                style={{ display: activeTab === "ref" ? "block" : "none" }}
                            >
                                <div style={{ textAlign: "center" }}>
                                    <img src={require('./assets/img/Image-ref.png')} alt="Success" style={{ width: "550px", marginBottom: "40px", marginTop: "40px" }} />
                                </div>
                            </div>
                            <div
                                className="tab-content"
                                style={{ display: activeTab === "answer" ? "block" : "none" }}
                            >
                                <section className="tabele-layout">
                                    <Answer />
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
