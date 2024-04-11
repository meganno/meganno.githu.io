import {
    Alignment,
    Button,
    Card,
    Classes,
    FocusStyleManager,
    H3,
    Intent,
    Navbar,
} from "@blueprintjs/core";
import { useEffect, useState } from "react";
import { Visible } from "react-grid-system";
import "./App.css";
import PageSection from "./navigation/PageSection";
import BlogPost from "./pages/BlogPost";
FocusStyleManager.onlyShowFocusOnTabs();
function App() {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        // dynamic link section detection
        const scrollArea =
            document.getElementsByClassName(" page-scroll-area")[0];
        const onScroll = () => {
            var current = "";
            const sections = document.querySelectorAll(".section");
            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                if (
                    scrollArea.scrollTop +
                        90 +
                        50 +
                        (window.innerWidth < 1200 ? 55 : 0) >=
                    sectionTop
                ) {
                    current = section.getAttribute("id");
                }
            });
            document
                .querySelectorAll(".page-section-anchors button")
                .forEach((button) => {
                    button.classList.remove(Classes.ACTIVE);
                });
            try {
                document
                    .getElementById(`${current}-button`)
                    .classList.add(Classes.ACTIVE);
            } catch (error) {}
        };
        scrollArea.addEventListener("scroll", onScroll, { passive: true });
        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", onScroll);
        };
    }, []);
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
                        <H3 style={{ margin: 0 }}>MEGAnno Demo</H3>
                    </Navbar.Heading>
                </Navbar.Group>
                <Navbar.Group align={Alignment.RIGHT}>
                    <a href="https://meganno.megagon.info" target="_blank">
                        <Button intent={Intent.PRIMARY} text="Documentation" />
                    </a>
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
                            padding: 5,
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
            </Navbar>
            <BlogPost />
        </div>
    );
}
export default App;
