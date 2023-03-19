import React from "react";
import Papa from "papaparse";

/**
 *
 * https://docs.google.com/spreadsheets/d/1e03wpg3_8UcZnfHjPsW3QHDo-qnp000Axwmj34iv5wk/edit#gid=0
 */

const GOOGLE_SHEET_KEY = "1e03wpg3_8UcZnfHjPsW3QHDo-qnp000Axwmj34iv5wk";

export function useGetDataFromSheet() {
  const [data, setData] = React.useState();

  React.useEffect(() => {
    Papa.parse(
      `https://docs.google.com/spreadsheets/d/${GOOGLE_SHEET_KEY}/pub?output=csv`,
      {
        download: true,
        header: true,
        complete: results => {
          setData(results.data);
        }
      }
    );
  }, []);

  return { data };
}
