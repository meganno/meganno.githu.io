import { Menu, MenuItem } from "@blueprintjs/core";
import { faCopyright, faHome } from "@fortawesome/pro-duotone-svg-icons";
import _ from "lodash";
import eacl_logo from "./acl-logo.png";
import { faIcon } from "./icon";
import logo_with_text from "./logo_with_text.png";
export default function Nav({ activePanel, setActivePanel }) {
    const setPanel = (value) => {
        window.location.hash = `#${value}`;
        setActivePanel(value);
    };
    return (
        <div className="nav">
            <img
                style={{ margin: "40px 0px 20px" }}
                width={172}
                src={logo_with_text}
            />
            <div>
                <a target="_blank" href="https://github.com/meganno">
                    View on GitHub
                </a>
            </div>
            <Menu large style={{ padding: 0, marginTop: 15 }}>
                <MenuItem
                    onClick={() => setPanel("quick-start")}
                    active={_.isEqual(activePanel, "quick-start")}
                    icon={faIcon({ icon: faHome })}
                    text="Quick start"
                />
                <MenuItem
                    onClick={() => setPanel("eacl-2024")}
                    active={_.isEqual(activePanel, "eacl-2024")}
                    icon={<img width={16} src={eacl_logo} />}
                    text="EACL 2024"
                />
            </Menu>
            <div style={{ marginTop: 20 }}>
                {faIcon({ icon: faCopyright })}&nbsp;{new Date().getFullYear()}{" "}
                Megagon Labs
            </div>
        </div>
    );
}
