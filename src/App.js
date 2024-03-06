import {
    Alignment,
    Button,
    FocusStyleManager,
    Menu,
    MenuItem,
    Navbar,
    Popover,
} from "@blueprintjs/core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
    faBars,
    faCopyright,
    faHome,
} from "@fortawesome/pro-duotone-svg-icons";
import _ from "lodash";
import { useEffect, useState } from "react";
import {
    BrowserView,
    MobileView,
    isDesktop,
    isMobile,
} from "react-device-detect";
import "./App.css";
import Nav from "./Nav";
import eacl_logo from "./acl-logo.png";
import { faIcon } from "./icon";
import logo from "./logo.png";
import Eacl from "./panels/Eacl";
import Main from "./panels/Main";
FocusStyleManager.onlyShowFocusOnTabs();
function App() {
    const [activePanel, setActivePanel] = useState("quick-start");
    const setPanel = (value) => {
        window.location.hash = `#${value}`;
        setActivePanel(value);
    };
    useEffect(() => {
        const hash = window.location.hash;
        let panel = hash.substring(hash.indexOf("#") + 1);
        if (!_.includes(["quick-start", "eacl-2024"], panel)) {
            panel = "quick-start";
        }
        setActivePanel(panel);
    }, []);
    if (isDesktop)
        return (
            <BrowserView>
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
                            {_.isEqual(activePanel, "quick-start") ? (
                                <Main />
                            ) : null}
                            {_.isEqual(activePanel, "eacl-2024") ? (
                                <Eacl />
                            ) : null}
                        </div>
                    </main>
                </div>
            </BrowserView>
        );
    if (isMobile)
        return (
            <MobileView>
                <Navbar fixedToTop>
                    <Navbar.Group align={Alignment.LEFT}>
                        <img height={30} src={logo} />
                    </Navbar.Group>
                    <Navbar.Group align={Alignment.RIGHT}>
                        <a target="_blank" href="https://github.com/meganno">
                            <Button
                                large
                                minimal
                                icon={faIcon({ icon: faGithub })}
                            />
                        </a>
                        <Popover
                            minimal
                            position="bottom-right"
                            content={
                                <Menu large>
                                    <MenuItem
                                        onClick={() => setPanel("quick-start")}
                                        active={_.isEqual(
                                            activePanel,
                                            "quick-start"
                                        )}
                                        icon={faIcon({ icon: faHome })}
                                        text="Quick start"
                                    />
                                    <MenuItem
                                        onClick={() => setPanel("eacl-2024")}
                                        active={_.isEqual(
                                            activePanel,
                                            "eacl-2024"
                                        )}
                                        icon={
                                            <img width={16} src={eacl_logo} />
                                        }
                                        text="EACL 2024"
                                    />
                                </Menu>
                            }
                        >
                            <Button
                                large
                                minimal
                                icon={faIcon({ icon: faBars })}
                            />
                        </Popover>
                    </Navbar.Group>
                </Navbar>
                <div
                    style={{
                        marginTop: 50,
                        paddingLeft: 15,
                        paddingRight: 15,
                        paddingBottom: 0.01,
                        paddingTop: 0.01,
                        minHeight: "calc(100vh - 108px)",
                    }}
                >
                    {_.isEqual(activePanel, "quick-start") ? <Main /> : null}
                    {_.isEqual(activePanel, "eacl-2024") ? <Eacl /> : null}
                </div>
                <div
                    style={{
                        marginTop: 20,
                        paddingBottom: 20,
                        textAlign: "center",
                    }}
                >
                    {faIcon({ icon: faCopyright })}&nbsp;
                    {new Date().getFullYear()} Megagon Labs
                </div>
            </MobileView>
        );
}
export default App;
