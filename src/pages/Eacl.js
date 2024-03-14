import {
    Button,
    Classes,
    FormGroup,
    H3,
    InputGroup,
    Intent,
} from "@blueprintjs/core";
import { faInboxIn, faInboxOut } from "@fortawesome/pro-duotone-svg-icons";
import axios from "axios";
import classNames from "classnames";
import _ from "lodash";
import { useEffect, useState } from "react";
import { Col, Row } from "react-grid-system";
import { scrollIntoViewWithOffset } from "../constant";
import { faIcon } from "../icon";
import logo from "../logo_with_text_vertical.png";
import { actionToaster, createToast } from "../toaster";
import About from "./About";
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
                        icon: faInboxIn,
                        message: (
                            <div>
                                <p>
                                    A token has been sent to your email account.
                                </p>
                                <p>
                                    Please check your spam or junk folder if you
                                    cannot find the email in your inbox.
                                </p>
                            </div>
                        ),
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
                marginTop: 50,
                height: "calc(100% - 50px)",
                width: "100%",
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
                <About />
                <H3 id="page-instruction-title" style={{ textAlign: "center" }}>
                    Instruction
                </H3>
                For your convenience, we prepared a{" "}
                <a
                    href="https://colab.research.google.com/drive/1SAlH1QPvxqRt5AXTTa7i5bvU8SFFA1tz?usp=sharing"
                    target="_blank"
                >
                    Google Colab notebook
                </a>{" "}
                for this demo. To run the Colab notebook, you’ll need a Google
                account, an{" "}
                <a
                    target="_blank"
                    href="https://help.openai.com/en/articles/4936850-where-do-i-find-my-openai-api-key"
                >
                    OpenAI API key
                </a>
                , and a MEGAnno access token (you can get this by filling out
                the{" "}
                <a
                    onClick={() => {
                        scrollIntoViewWithOffset("#page-request-form-title");
                    }}
                >
                    request form
                </a>{" "}
                below).
                <ol>
                    <li>
                        <p>
                            Click the link below to access the demo notebook.
                            <br />
                            <a
                                href="https://colab.research.google.com/drive/1SAlH1QPvxqRt5AXTTa7i5bvU8SFFA1tz?usp=sharing"
                                target="_blank"
                            >
                                <Button
                                    icon={
                                        <svg
                                            style={{ height: 32 }}
                                            viewBox="0 0 24 24"
                                        >
                                            <g id="colab-logo">
                                                <path
                                                    d="M4.54,9.46,2.19,7.1a6.93,6.93,0,0,0,0,9.79l2.36-2.36A3.59,3.59,0,0,1,4.54,9.46Z"
                                                    style={{ fill: "#e8710a" }}
                                                />
                                                <path
                                                    d="M2.19,7.1,4.54,9.46a3.59,3.59,0,0,1,5.08,0l1.71-2.93h0l-.1-.08h0A6.93,6.93,0,0,0,2.19,7.1Z"
                                                    style={{ fill: "#f9ab00" }}
                                                />
                                                <path
                                                    d="M11.34,17.46h0L9.62,14.54a3.59,3.59,0,0,1-5.08,0L2.19,16.9a6.93,6.93,0,0,0,9,.65l.11-.09"
                                                    style={{ fill: "#f9ab00" }}
                                                />
                                                <path
                                                    d="M12,7.1a6.93,6.93,0,0,0,0,9.79l2.36-2.36a3.59,3.59,0,1,1,5.08-5.08L21.81,7.1A6.93,6.93,0,0,0,12,7.1Z"
                                                    style={{ fill: "#f9ab00" }}
                                                />
                                                <path
                                                    d="M21.81,7.1,19.46,9.46a3.59,3.59,0,0,1-5.08,5.08L12,16.9A6.93,6.93,0,0,0,21.81,7.1Z"
                                                    style={{ fill: "#e8710a" }}
                                                />
                                            </g>
                                        </svg>
                                    }
                                    large
                                    outlined
                                    text="MEGAnno EACL24 Demo.ipynb"
                                />
                            </a>
                        </p>
                    </li>
                    <li>
                        <p>
                            Follow the steps in the notebook. You need to log in
                            with your Google account to run this demo.
                        </p>
                        <ol type="a">
                            <li>
                                Note: You can run the notebook as is without
                                saving any changes. If you’d like to make
                                changes, we suggest you make a copy of the
                                notebook.
                            </li>
                        </ol>
                    </li>
                    <li>
                        When asked, provide your OpenAI API key and MEGAnno
                        token in the notebook cell.
                    </li>
                    <li>
                        Enjoy! Please let us know if you have any feedback or
                        suggestions.
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
                        marginBottom: 40,
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
