import React from 'react';
import { Table, TableBody, TableCell, TableRow } from '@mui/material';
import { TransakcijaKarticePrikaz } from '../../utils/types';
import { ScrollContainer, StyledHeadTableCell, StyledTableCell, StyledTableHead, StyledTableRow } from 'utils/tableStyles';


interface TransactionListProps {
    transakcije: TransakcijaKarticePrikaz[];
}
function formatDate(date: string | null): string {
    if (date == null) {
      return "";
    }
  
    const dateObj = /^\d+$/.test(date) ? new Date(Number(date)) : new Date(date);
  
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric', 
      month: 'short',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false  
    };
    return new Intl.DateTimeFormat('en-US', options).format(dateObj);
  }

const ListaTransakcija: React.FC<TransactionListProps> = ({ transakcije }) => {

    return (
        <ScrollContainer>
            <Table aria-label="simple table">
                <StyledTableHead>
                    <StyledTableRow>
                        <StyledHeadTableCell>Naziv primaoca</StyledHeadTableCell>
                        <StyledHeadTableCell align="right">Broj računa primaoca</StyledHeadTableCell>
                        <StyledHeadTableCell align="right">Iznos</StyledHeadTableCell>
                        <StyledHeadTableCell align="right">Šifra plaćanja</StyledHeadTableCell>
                        <StyledHeadTableCell align="right">Poziv na broj</StyledHeadTableCell>
                        <StyledHeadTableCell align="right">Svrha plaćanja</StyledHeadTableCell>
                        <StyledHeadTableCell align="right">Status</StyledHeadTableCell>
                        <StyledHeadTableCell align="right">Datum i vreme transakcije</StyledHeadTableCell>
                        <StyledHeadTableCell align="right">Datum i vreme izvršavanja</StyledHeadTableCell>
                    </StyledTableRow>
                </StyledTableHead>
                <TableBody>
                    {transakcije.length > 0 ? (
                        transakcije?.map((transakcija) => (
                            <StyledTableRow key={transakcija.id}>
                                <StyledTableCell component="th" scope="row">
                                    {transakcija.nazivPrimaoca}
                                </StyledTableCell>
                                <StyledTableCell align="right">{transakcija.brojRacunaPrimaoca}</StyledTableCell>
                                <StyledTableCell align="right">{transakcija.iznos}</StyledTableCell>
                                <StyledTableCell align="right">{transakcija.sifraPlacanja}</StyledTableCell>
                                <StyledTableCell align="right">{transakcija.pozivNaBroj}</StyledTableCell>
                                <StyledTableCell align="right">{transakcija.svrhaPlacanja}</StyledTableCell>
                                <StyledTableCell align="right">{transakcija.status}</StyledTableCell>
                                <StyledTableCell align="right">{formatDate(transakcija.vremeTransakcije.toString())}</StyledTableCell>
                                <StyledTableCell align="right">{formatDate(transakcija.vremeIzvrsavanja.toString())}</StyledTableCell>
                            </StyledTableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell style={{ textAlign: 'center' }} colSpan={9}>Trenutno nema transakcija</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </ScrollContainer>
    );
};

export default ListaTransakcija;
