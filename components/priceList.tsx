import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export const PriceList = ({ array }: { array: any }) => {
    return (
        <TableContainer
            component={Paper}
            sx={{
                m: "15px 0 15px",
                maxWidth: "650px",
                alignSelf: "center",
            }}
        >
            <Table aria-label="caption table">
                {/* <caption></caption> */}
                <TableHead>
                    <TableRow
                        sx={{
                            backgroundColor: "#1976d2",
                        }}
                    >
                        <TableCell
                            align="center"
                            sx={{
                                color: "white",
                                fontWeight: 600,
                            }}
                        >
                            Услуга
                        </TableCell>
                        <TableCell
                            align="center"
                            sx={{
                                color: "white",
                                fontWeight: 600,
                            }}
                        >
                            Стоимость
                        </TableCell>
                        <TableCell
                            align="center"
                            sx={{
                                color: "white",
                                fontWeight: 600,
                            }}
                        >
                            Требуемые документы
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {array.map((row: any) => (
                        <TableRow key={row.name}>
                            <TableCell align="center">{row.Work}</TableCell>
                            <TableCell align="center">
                                {row.IndividualEntityPrice}
                            </TableCell>
                            <TableCell align="center">
                                {row.DocsReceived}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
