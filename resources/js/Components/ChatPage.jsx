import React, { useState, useEffect } from "react";
import { useParams, useNavigate  } from "react-router-dom";
import Container from "@mui/material/Container";
import Chat from "./Chat";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import Send from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import { Api } from "../api.js";

const ChatPage = () => {
    const { id } = useParams();
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState("");
    const navigate  = useNavigate();

    useEffect(() => {
        fetchData();

        const interval = setInterval(() => {
            fetchData();
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const fetchData = async () => {
        try {
            if(!localStorage.getItem("user")) 
            navigate("/")
            const response = await Api.getMessanges(id);
            setMessages(response.data.messanges);
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await Api.sendMessange(id, text);
            setMessages(response.data.messanges);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <Container
                style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "80vh",
                    justifyContent: "space-between",
                }}
                sx={{ mt: 5 }}
                maxWidth="sm"
            >
                <Grid container direction="column">
                    {messages?.map((message) => (
                        <Chat key={message.id} message={message} />
                    ))}
                </Grid>
                <form onSubmit={handleSubmit}>
                    <FormControl style={{ flexDirection: "row" }} sx={{ width: "100%" }}>
                        <Input
                            value={text}
                            onChange={handleChange}
                            name="text"
                            sx={{ width: "75%" }}
                        />
                        <Button type="submit" sx={{ width: "25%" }} variant="contained">
                            <Send />
                        </Button>
                    </FormControl>
                </form>
            </Container>
        </div>
    );
};

export default ChatPage;
