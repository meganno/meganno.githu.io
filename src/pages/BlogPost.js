import {
    Button,
    Classes,
    FormGroup,
    H3,
    InputGroup,
    Intent,
    TextArea,
} from "@blueprintjs/core";
import { faInboxOut, faPartyHorn } from "@fortawesome/pro-duotone-svg-icons";
import axios from "axios";
import classNames from "classnames";
import _ from "lodash";
import { useEffect, useState } from "react";
import { Col, Row } from "react-grid-system";
import { scrollIntoViewWithOffset, validateEmail } from "../constant";
import { faIcon } from "../icon";
import logo from "../logo_with_text_vertical.png";
import { actionToaster, createToast } from "../toaster";
import About from "./About";
export default function BlogPost() {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    const [loading, setLoading] = useState(false);
    const [heardFrom, setHeardFrom] = useState("");
    const [useFor, setUseFor] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const clearForm = () => {
        setHeardFrom("");
        setUseFor("");
        setName("");
        setEmail("");
    };
    const [error, setError] = useState({});
    const handleSubmit = () => {
        let check = {};
        if (!validateEmail(email)) {
            check["email"] = "Invalid email address.";
        }
        if (_.isEmpty(_.trim(name))) {
            check["name"] = "Name cannot be empty.";
        }
        if (_.isEmpty(_.trim(heardFrom))) {
            check["heardFrom"] = "Cannot be empty.";
        }
        if (_.isEmpty(_.trim(useFor))) {
            check["useFor"] = "Cannot be empty.";
        }
        if (!_.isEmpty(check)) {
            setError(check);
            return;
        }
        setError({});
        setLoading(true);
        axios
            .post(
                "https://labeler.megagon.ai:3379/request_form",
                {
                    heard_from: heardFrom,
                    use_for: useFor,
                    name: name,
                },
                { params: { email: email, project: "blog_post" } }
            )
            .then(() => {
                actionToaster.show(
                    createToast({
                        timeout: 10000,
                        icon: faPartyHorn,
                        message: (
                            <div>
                                <p>
                                    Your request is under review and when it is
                                    approved a token will be sent to your email
                                    account (will usually be processed within 2
                                    business days).
                                </p>
                                <p>
                                    Please check your spam or junk folder if you
                                    cannot find the email in your inbox.
                                </p>
                                <p>Thanks for applying!</p>
                            </div>
                        ),
                        intent: Intent.SUCCESS,
                    })
                );
                setLoading(false);
                clearForm();
            })
            .catch(({ response }) => {
                const data = _.get(response, "data", {});
                setError(data);
                actionToaster.show(
                    createToast({
                        timeout: 10000,
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
                    href="https://colab.research.google.com/drive/1kaKfPSJm0ztCzXHNhvzizo3OgsnlBgPz?usp=sharing"
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
                                href="https://colab.research.google.com/drive/1kaKfPSJm0ztCzXHNhvzizo3OgsnlBgPz?usp=sharing"
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
                                    text="MEGAnno Blogpost Demo.ipynb"
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
                <FormGroup
                    label="Where did you hear about MEGAnno?"
                    helperText={
                        _.has(error, "heardFrom") ? error.heardFrom : null
                    }
                >
                    <InputGroup
                        intent={
                            _.has(error, "heardFrom") ? Intent.DANGER : null
                        }
                        className={loading ? Classes.SKELETON : null}
                        type="text"
                        large
                        value={heardFrom}
                        onChange={(event) => {
                            setHeardFrom(event.target.value);
                        }}
                    />
                </FormGroup>
                <FormGroup
                    label="What will you be using it for?"
                    helperText={_.has(error, "useFor") ? error.useFor : null}
                >
                    <TextArea
                        intent={_.has(error, "useFor") ? Intent.DANGER : null}
                        className={loading ? Classes.SKELETON : null}
                        large
                        fill
                        style={{ resize: "none", minHeight: 88 }}
                        autoResize
                        value={useFor}
                        onChange={(event) => {
                            setUseFor(event.target.value);
                        }}
                    />
                </FormGroup>
                <Row>
                    <Col xs={12} sm={6}>
                        <FormGroup
                            label="Name"
                            helperText={
                                _.has(error, "name") ? error.name : null
                            }
                        >
                            <InputGroup
                                intent={
                                    _.has(error, "name") ? Intent.DANGER : null
                                }
                                className={loading ? Classes.SKELETON : null}
                                large
                                type="text"
                                value={name}
                                onChange={(event) => {
                                    setName(event.target.value);
                                }}
                            />
                        </FormGroup>
                    </Col>
                    <Col xs={12} sm={6}>
                        <FormGroup
                            label="Email"
                            helperText={
                                _.has(error, "email") ? error.email : null
                            }
                        >
                            <InputGroup
                                intent={
                                    _.has(error, "email") ? Intent.DANGER : null
                                }
                                className={loading ? Classes.SKELETON : null}
                                large
                                type="email"
                                value={email}
                                onChange={(event) => {
                                    setEmail(event.target.value);
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
                        onClick={handleSubmit}
                        text="Submit"
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
