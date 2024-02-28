import { Menu, MenuItem } from "@blueprintjs/core";
import { faCopyright, faHome } from "@fortawesome/pro-duotone-svg-icons";
import _ from "lodash";
import eacl_logo from "./acl-logo.png";
import { faIcon } from "./icon";
import logo from "./logo.png";
export default function Nav({ activePanel }) {
    const setPath = (value) => {
        window.location.pathname = `/${value}`;
    };
    return (
        <div className="nav">
            <img style={{ margin: "40px 0px 20px" }} width={172} src={logo} />
            <div>
                <a target="_blank" href="https://github.com/meganno">
                    View on GitHub
                </a>
            </div>
            <Menu large style={{ padding: 0, marginTop: 15 }}>
                <MenuItem
                    onClick={() => setPath("quick-start")}
                    active={_.isEqual(activePanel, "quick-start")}
                    icon={faIcon({ icon: faHome })}
                    text="Quick start"
                />
                <MenuItem
                    onClick={() => setPath("eacl-2024")}
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
