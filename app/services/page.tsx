import { ServiceCard } from "@/components/Cards/serviceCard";
import { MuiTypoH1 } from "@/components/MuiComponents/MuiTypoH1";
import { Box, Container } from "@mui/material";
import { Metadata } from "next";
import { getServices } from "@/query/services/getServices";

export const metadata: Metadata = {
    title: "ЭталонGEO | Услуги",
    description: "Полный список услуг предоставляемых клиентам EtalonGEO",
};

export default async function Services() {
    const services = await getServices({});

    return (
        services && (
            <Container
                sx={{
                    minHeight: "78vh",
                }}
            >
                <MuiTypoH1 mDesktop="45px 0 15px" color="white">
                    Услуги
                </MuiTypoH1>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "wrap",
                    }}
                >
                    {services &&
                        services.map(({ id, name, description }) => {
                            return (
                                <ServiceCard
                                    key={id}
                                    endpoint="blog"
                                    id={id}
                                    name={name}
                                    description={description}
                                />
                            );
                        })}
                </Box>
            </Container>
        )
    );
}
