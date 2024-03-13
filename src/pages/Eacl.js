import {
    Button,
    Classes,
    FormGroup,
    H3,
    InputGroup,
    Intent,
    Pre,
} from "@blueprintjs/core";
import { faInboxOut } from "@fortawesome/pro-duotone-svg-icons";
import axios from "axios";
import classNames from "classnames";
import _ from "lodash";
import { useEffect, useState } from "react";
import { Col, Row } from "react-grid-system";
import { faIcon } from "../icon";
import logo from "../logo_with_text_vertical.png";
import { actionToaster, createToast } from "../toaster";
export default function Eacl() {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    const [email, setEmail] = useState("");
    const [invitationCode, setInvitationCode] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({});
    const handleSubmit = () => {
        setLoading(true);
        setError({});
        axios
            .get("https://labeler.megagon.ai:3379/request_token", {
                params: {
                    email: email,
                    invitation_code: invitationCode,
                    project: "eacl_demo",
                },
            })
            .then(() => {
                actionToaster.show(
                    createToast({
                        message: "A token has been sent to your email account.",
                        intent: Intent.SUCCESS,
                    })
                );
                setEmail("");
                setInvitationCode("");
                setLoading(false);
            })
            .catch(({ response }) => {
                const data = _.get(response, "data", {});
                setError(data);
                actionToaster.show(
                    createToast({
                        message: JSON.stringify(data),
                        intent: Intent.DANGER,
                    })
                );
                setLoading(false);
            });
    };
    return (
        <div
            style={{
                height: "calc(100vh - 50px)",
                overflowY: "auto",
            }}
            className={classNames(Classes.RUNNING_TEXT, "page-scroll-area")}
        >
            <div
                style={{
                    maxWidth: "100vw",
                    margin: "auto",
                    width: 800,
                    marginTop: width < 1200 ? 105 : 0,
                    paddingLeft: 15,
                    paddingRight: 15,
                }}
            >
                <H3 id="page-about-title" style={{ textAlign: "center" }}>
                    About
                </H3>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Facilisi nullam vehicula ipsum a arcu cursus vitae
                    congue mauris. Eget mauris pharetra et ultrices neque.
                    Semper auctor neque vitae tempus quam. Laoreet suspendisse
                    interdum consectetur libero id faucibus nisl tincidunt. Urna
                    duis convallis convallis tellus id. Sit amet commodo nulla
                    facilisi nullam vehicula ipsum a. Dignissim enim sit amet
                    venenatis urna cursus eget nunc. Pretium quam vulputate
                    dignissim suspendisse in est ante. Nibh ipsum consequat nisl
                    vel pretium lectus quam id. Nulla posuere sollicitudin
                    aliquam ultrices sagittis orci a scelerisque. Et netus et
                    malesuada fames ac turpis. In hac habitasse platea dictumst.
                    Sit amet purus gravida quis blandit turpis. Nisl vel pretium
                    lectus quam id leo in vitae. Odio euismod lacinia at quis
                    risus sed vulputate odio. Pulvinar neque laoreet suspendisse
                    interdum consectetur. Aliquam faucibus purus in massa tempor
                    nec. Vulputate ut pharetra sit amet.
                </div>
                <H3 id="page-instruction-title" style={{ textAlign: "center" }}>
                    Instruction
                </H3>
                <a target="_blank" href="https://github.com/meganno">
                    View on GitHub
                </a>
                <ol>
                    <li>
                        <p>
                            In arcu cursus euismod quis. Vel eros donec ac odio
                            tempor orci dapibus. Sollicitudin ac orci phasellus
                            egestas tellus rutrum tellus pellentesque. Sem
                            integer vitae justo eget magna fermentum. Tellus
                            molestie nunc non blandit massa enim nec dui nunc.
                            Phasellus egestas tellus rutrum tellus pellentesque
                            eu tincidunt tortor. Nunc mattis enim ut tellus
                            elementum sagittis vitae et. Ut tortor pretium
                            viverra suspendisse. Et ligula ullamcorper malesuada
                            proin libero nunc consequat. In nibh mauris cursus
                            mattis. Orci sagittis eu volutpat odio facilisis
                            mauris.
                        </p>
                        <Pre style={{ overflowX: "auto" }}>
                            Facilisis gravida neque convallis a cras semper
                            auctor. Justo laoreet sit amet cursus sit amet
                            dictum.
                            <br />
                            Hac habitasse platea dictumst quisque sagittis
                            purus. Magna eget est lorem ipsum dolor.
                        </Pre>
                    </li>
                </ol>
                <H3
                    id="page-request-form-title"
                    style={{ textAlign: "center" }}
                >
                    Request Form
                </H3>
                <Row>
                    <Col xs={12} sm={6}>
                        <FormGroup
                            label="Email"
                            helperText={
                                _.has(error, "email") ? error.email : null
                            }
                        >
                            <InputGroup
                                className={loading ? Classes.SKELETON : null}
                                intent={
                                    _.has(error, "email") ? Intent.DANGER : null
                                }
                                large
                                type="email"
                                value={email}
                                onChange={(event) => {
                                    setEmail(event.target.value);
                                }}
                            />
                        </FormGroup>
                    </Col>
                    <Col xs={12} sm={6}>
                        <FormGroup
                            label="Invitation Code"
                            helperText={
                                _.has(error, "invitation_code")
                                    ? error.invitation_code
                                    : null
                            }
                        >
                            <InputGroup
                                className={loading ? Classes.SKELETON : null}
                                intent={
                                    _.has(error, "invitation_code")
                                        ? Intent.DANGER
                                        : null
                                }
                                large
                                type="text"
                                value={invitationCode}
                                onChange={(event) => {
                                    setInvitationCode(event.target.value);
                                }}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <div
                    style={{
                        marginTop: 15,
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Button
                        className={loading ? Classes.SKELETON : null}
                        icon={faIcon({ icon: faInboxOut })}
                        intent={Intent.SUCCESS}
                        large
                        text="Submit"
                        onClick={handleSubmit}
                    />
                </div>
                <H3 style={{ textAlign: "center" }}>Resource</H3>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: 40,
                    }}
                >
                    <a target="_blank" href="https://megagon.ai">
                        <img src={logo} width={150} />
                    </a>
                </div>
            </div>
        </div>
    );
}
