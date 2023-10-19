import { DocsForm } from "@/components/DocsPage/DocsForm";
import { Container } from "@mui/material";
import { Metadata } from "next";

export type Data = {
    id: string;
    attributes: {
        url: string;
        ext: string;
        name: string;
        hash: string;
    };
};

export type Response = Data[];

export const metadata: Metadata = {
    title: "ЭталонGEO | Документы",
    description: "Получите документы по вашим выполненым заявкам",
};

export default function Docs() {
    return (
        <Container
            maxWidth={false}
            sx={{
                backgroundColor: "white",
                minHeight: "78vh",
            }}
        >
            <DocsForm />
        </Container>
    );
}
