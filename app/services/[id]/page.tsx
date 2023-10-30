import { Form } from "@/components/MainPage/form";
import { MuiTypoBody } from "@/components/MuiComponents/MuiTypoBody";
import { MuiTypoH1 } from "@/components/MuiComponents/MuiTypoH1";
import { BackButton } from "@/components/backButton";
import { PriceList } from "@/components/priceList";
import { LocalhostURL } from "@/utils/URL";
import { getDataPost } from "@/utils/getDataEntry";
import { Container, Box } from "@mui/material";
import Image from "next/image";

type Props = {
    params: {
        id: string;
    };
};

type Price = {
    id: number;
    Work: string;
    LegalEntityPrice: number;
    IndividualEntityPrice: number;
    DocsReceived: string;
};

type PriceList = [Array<Price>];

export async function generateMetadata({ params: { id } }: Props) {
    const service = await getDataPost(id, "services");

    return {
        title: `EtalonGEO | ${service.data.attributes.title}`,
    };
}

export default async function Service({ params: { id } }: Props) {
    const service = await getDataPost(id, "services"); // Type?
    const priceList = service.data.attributes.PriceList;

    return (
        <Container
            maxWidth={false}
            sx={{
                minHeight: "77vh",
                backgroundColor: "white",
                display: "flex",
            }}
        >
            <Container
                sx={{
                    margin: "25px auto",
                }}
            >
                <BackButton backTo="все услуги" url="/services" />

                <MuiTypoH1 mDesktop="0 0 20px 0">
                    {service.data.attributes.title}
                </MuiTypoH1>
                <Box display={"flex"}>
                    <MuiTypoBody mDesktop="0 10px 0 0">
                        {service.data.attributes.text}
                    </MuiTypoBody>
                    <Image
                        src={`${
                            LocalhostURL +
                            service.data.attributes.poster.data.attributes
                                .formats.small.url
                        }`}
                        width={
                            service.data.attributes.poster.data.attributes
                                .formats.small.width
                        }
                        height={
                            service.data.attributes.poster.data.attributes
                                .formats.small.height
                        }
                        alt={
                            service.data.attributes.poster.data.attributes
                                .formats.small.name
                        }
                        style={{ objectFit: "contain", borderRadius: "10px" }}
                    />
                </Box>
                <Box>
                    <Form
                        headerText="Оставьте заявку через форму ниже и мы с вами свяжемся"
                        buttonText="Оставить заявку"
                        theme={service.data.attributes.title}
                        message={`Добрый день хотел бы оставить заявку для консультации по услуге "${service.data.attributes.title}"`}
                    />
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        margin: "15px 0 0 0",
                    }}
                >
                    <h2>Цена на услуги:</h2>
                    <PriceList array={priceList} />
                </Box>
            </Container>
        </Container>
    );
}
