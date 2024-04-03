import {
    Alignment,
    Button,
    Card,
    Classes,
    Dialog,
    FocusStyleManager,
    H3,
    Intent,
    Menu,
    MenuItem,
    Navbar,
    Popover,
} from "@blueprintjs/core";
import { faNewspaper, faSignPost } from "@fortawesome/pro-duotone-svg-icons";
import _ from "lodash";
import { useEffect, useState } from "react";
import { Visible } from "react-grid-system";
import "./App.css";
import eacl_logo from "./eacl-logo.png";
import { faIcon } from "./icon";
import PageSection from "./navigation/PageSection";
import BlogPost from "./pages/BlogPost";
import Eacl from "./pages/Eacl";
FocusStyleManager.onlyShowFocusOnTabs();
function App() {
    const [activePage, setActivePage] = useState("blog-post");
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    const setPage = (value) => {
        window.location.hash = `#${value}`;
        setActivePage(value);
    };
    useEffect(() => {
        const hash = window.location.hash;
        let panel = hash.substring(hash.indexOf("#") + 1);
        if (!_.includes(["blog-post", "eacl-2024"], panel)) {
            panel = "blog-post";
        }
        setActivePage(panel);
    }, []);
    const HEADING = {
        "blog-post": "MEGAnno Demo",
        "eacl-2024": "MEGAnno Demo@EACL2024",
    };
    const [isDialogOpen, setIsDialogOpen] = useState(true);
    return (
        <div style={{ height: "100vh", overflow: "hidden" }}>
            <Navbar
                fixedToTop
                style={{
                    paddingLeft: width < 500 ? 15 : 50,
                    paddingRight: width < 500 ? 15 : 50,
                }}
            >
                <Navbar.Group align={Alignment.LEFT}>
                    <Navbar.Heading>
                        <H3 style={{ margin: 0 }}>
                            {_.get(HEADING, activePage, "MegAnno Demo")}
                        </H3>
                    </Navbar.Heading>
                </Navbar.Group>
                <Visible xl xxl xxxl>
                    <div
                        style={{
                            position: "absolute",
                            left: "50%",
                            top: "50%",
                            transform: "translate(-50%, -50%)",
                        }}
                    >
                        <PageSection />
                    </div>
                </Visible>
                <Visible xs sm md lg>
                    <Card
                        elevation={3}
                        style={{
                            padding: 10,
                            position: "absolute",
                            top: 65,
                            left: "50%",
                            width: 346.94,
                            maxWidth: "calc(100vw - 30px)",
                            transform: "translate(-50%, 0)",
                        }}
                    >
                        <PageSection />
                    </Card>
                </Visible>
                <Navbar.Group align={Alignment.RIGHT}>
                    <Popover
                        placement="bottom-end"
                        content={
                            <Menu>
                                <MenuItem
                                    active={_.isEqual(activePage, "blog-post")}
                                    icon={faIcon({ icon: faNewspaper })}
                                    text="Blog Post"
                                    onClick={() => {
                                        setPage("blog-post");
                                    }}
                                />
                                <MenuItem
                                    active={_.isEqual(activePage, "eacl-2024")}
                                    intent={Intent.DANGER}
                                    icon={<img width={16} src={eacl_logo} />}
                                    text="EACL 2024"
                                    onClick={() => {
                                        setPage("eacl-2024");
                                    }}
                                />
                            </Menu>
                        }
                    >
                        <>
                            <Visible sm md lg xl xxl xxxl>
                                <Button
                                    minimal
                                    text="Go to..."
                                    icon={faIcon({ icon: faSignPost })}
                                />
                            </Visible>
                            <Visible xs>
                                <Button
                                    minimal
                                    icon={faIcon({ icon: faSignPost })}
                                />
                            </Visible>
                        </>
                    </Popover>
                </Navbar.Group>
            </Navbar>
            {_.isEqual(activePage, "blog-post") ? <BlogPost /> : null}
            {_.isEqual(activePage, "eacl-2024") ? <Eacl /> : null}
            <Dialog
                isOpen={isDialogOpen}
                onClose={() => {
                    setIsDialogOpen(false);
                }}
                title="Looking for MEGAnno documentation?"
                isCloseButtonShown={false}
                style={{ maxWidth: 350 }}
            >
                <div style={{ padding: 15 }}>
                    <div className={Classes.TEXT_LARGE}>
                        Head to{" "}
                        <a href="https://meganno.megagon.info">
                            https://meganno.megagon.info
                        </a>{" "}
                        for meganno-client documentation.
                    </div>
                </div>
            </Dialog>
        </div>
    );
}
export default App;
