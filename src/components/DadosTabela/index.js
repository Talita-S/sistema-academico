import React, { useState, useEffect } from "react";

import { DataGrid } from "@mui/x-data-grid";

function index({rows, columns}) {
  return (
    <DataGrid rows={rows} columns={columns} width="100%"/>
  );
}

export default index;
