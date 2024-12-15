import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper,
}   from "@mui/material";

export const ScheduleTable2 = () => {
    return (
        <TableContainer component={Paper} sx={{ maxHeight: '300px' }}>
            <Table aria-label='simple table' stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>First name</TableCell>
                        <TableCell>Last name</TableCell>
                        <TableCell align="center">Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableData.map(row => (
                        <TableRow 
                            key={row.id} 
                            sx={{ '&:last-chil td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell>{ row.id }</TableCell>
                            <TableCell>{ row.first_name }</TableCell>
                            <TableCell>{ row.last_name }</TableCell>
                            <TableCell align="center">{ row.email }</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

const tableData = [{
    "id": 1,
    "first_name": "Dillie",
    "last_name": "Dessent",
    "email": "ddessent0@nymag.com",
    "gender": "Male",
    "ip_address": "2.222.220.136"
  }, {
    "id": 2,
    "first_name": "Sammie",
    "last_name": "Hould",
    "email": "should1@usnews.com",
    "gender": "Male",
    "ip_address": "21.178.73.239"
  }, {
    "id": 3,
    "first_name": "Natalya",
    "last_name": "Piel",
    "email": "npiel2@imageshack.us",
    "gender": "Female",
    "ip_address": "74.205.65.35"
  }, {
    "id": 4,
    "first_name": "Irvine",
    "last_name": "Brimmacombe",
    "email": "ibrimmacombe3@washington.edu",
    "gender": "Male",
    "ip_address": "209.190.76.44"
  }, {
    "id": 5,
    "first_name": "Shae",
    "last_name": "Castellanos",
    "email": "scastellanos4@opera.com",
    "gender": "Female",
    "ip_address": "85.143.154.222"
  }, {
    "id": 6,
    "first_name": "Persis",
    "last_name": "McConnachie",
    "email": "pmcconnachie5@jigsy.com",
    "gender": "Female",
    "ip_address": "55.240.133.57"
  }, {
    "id": 7,
    "first_name": "Aloysius",
    "last_name": "Osborn",
    "email": "aosborn6@msu.edu",
    "gender": "Male",
    "ip_address": "19.212.96.177"
  }, {
    "id": 8,
    "first_name": "Cathrin",
    "last_name": "Deddum",
    "email": "cdeddum7@answers.com",
    "gender": "Female",
    "ip_address": "138.113.59.38"
  }, {
    "id": 9,
    "first_name": "Steven",
    "last_name": "Korfmann",
    "email": "skorfmann8@msu.edu",
    "gender": "Male",
    "ip_address": "131.168.26.226"
  }, {
    "id": 10,
    "first_name": "Woody",
    "last_name": "McEntee",
    "email": "wmcentee9@chicagotribune.com",
    "gender": "Male",
    "ip_address": "145.144.237.116"
}]