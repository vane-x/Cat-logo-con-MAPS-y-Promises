import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import serviceJson from "../../services/serviceJson";
import ItemList from "../../ItemList/ItemList";

const ItemListContainer: React.FC<{ mensaje: string }> = ({ mensaje }) => {
  const [dataJson, setDataJson]: any = React.useState<any[]>([]);
  React.useEffect(() => {
    serviceJson().then(async (resp: any) => {
      await setDataJson(resp);
    });
  }, []);
  console.log(dataJson)
  return (
    <>
      <Box sx={{ width: "100%", maxWidth: "98%", height: "300", justifyContent: "center" }}>
        <Typography variant="h2" gutterBottom component="div" mt={4}>
          {mensaje}
        </Typography>
        <img src="/img/tiendita.png" alt="Logo tiendita" style={{ paddingBottom: "3rem"}}/>
      </Box>
      <Box sx={{ width: "100%", maxWidth: "98%", justifyContent: "center" }}>
        <ItemList dataJson={dataJson}/>
      </Box>
    </>
  );
};
export default ItemListContainer;
