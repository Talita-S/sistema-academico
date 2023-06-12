import React from "react";

import { Card, CardContent } from "@mui/material";

function index({titulo, conteudo}) {
  return (
    <Card>
        {titulo}
        <CardContent>
            {conteudo}
        </CardContent>
    </Card>
  );
}

export default index;
