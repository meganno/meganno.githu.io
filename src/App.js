import { FocusStyleManager } from "@blueprintjs/core";
import _ from "lodash";
import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./Nav";
import Eacl from "./panels/Eacl";
import Main from "./panels/Main";
FocusStyleManager.onlyShowFocusOnTabs();
function App() {
    const [activePanel, setActivePanel] = useState("quick-start");
    useEffect(() => {
        const hash = window.location.hash;
        let panel = hash.substring(hash.indexOf("#") + 1);
        if (!_.includes(["quick-start", "eacl-2024"], panel)) {
            panel = "quick-start";
        }
        setActivePanel(panel);
    }, []);
    return (
        <div
            style={{
                display: "flex",
                margin: "auto",
                flexDirection: "row",
                maxWidth: 1100,
                minHeight: "100vh",
            }}
        >
            <div
                style={{
                    flexBasis: 270,
                    zIndex: 1,
                    position: "relative",
                    flexGrow: 0,
                    flexShrink: 0,
                }}
            >
                <div
                    style={{
                        position: "fixed",
                        boxShadow: "1px 0 0 rgba(17,20,24,.15)",
                        paddingLeft: 1004,
                        width: 1269,
                        backgroundColor: "#fff",
                        marginLeft: -999,
                        height: "100vh",
                    }}
                >
                    <Nav
                        activePanel={activePanel}
                        setActivePanel={setActivePanel}
                    />
                </div>
            </div>
            <main
                style={{
                    flexGrow: 1,
                    flexShrink: 1,
                    flexBasis: 830,
                    backgroundColor: "#f6f7f9",
                    outline: "none",
                }}
            >
                <div
                    style={{
                        maxWidth: 830,
                        padding: "0 5px 40px 40px",
                        position: "relative",
                    }}
                >
                    {_.isEqual(activePanel, "quick-start") ? <Main /> : null}
                    {_.isEqual(activePanel, "eacl-2024") ? <Eacl /> : null}
                </div>
            </main>
        </div>
    );
}
export default App;
