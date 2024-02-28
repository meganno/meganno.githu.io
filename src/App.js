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
            }}
        >
            <div style={{ flexBasis: 270 }}>
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
            <div
                style={{
                    flexGrow: 1,
                    flexShrink: 1,
                    flexBasis: 830,
                    minHeight: "100vh",
                }}
            >
                <div
                    style={{
                        maxWidth: 830,
                        padding: "0 5px 40px 40px",
                    }}
                >
                    {_.isEqual(activePanel, "quick-start") ? <Main /> : null}
                    {_.isEqual(activePanel, "eacl-2024") ? <Eacl /> : null}
                </div>
            </div>
        </div>
    );
}
export default App;
