import React, { useState, useEffect } from "react";

import { DataGrid } from "@mui/x-data-grid";

const tabelaStyle = {
  width: "100vw",
  height: "400px"
}

function index({rows, columns, handleClick}) {
  return (
    <DataGrid rows={rows} columns={columns} style={tabelaStyle} onRowClick={(params) => handleClick(params.row)}/>
  );
}

export default index;
