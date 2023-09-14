import axios from "axios";
import {
  Button,
  Company,
  Container,
  Details,
  Item,
  ItemWrapper,
  List,
} from "./styles";
import { useEffect, useState } from "react";
import { getReport } from "../../utils/getReport";
import { data } from "./data";
import { Loading } from "notiflix";
import {
  StockPrice,
  updateStocksPrices,
} from "../../redux/features/stocksPricesSlice";
import { useAppDispatch } from "../../redux/hooks";
import moment from "moment";

const StocksSelection = () => {
  const [fileUrl, setFileUrl] = useState("");
  const [ready, setReady] = useState(false);
  const stocks = data;
  const dispatch = useAppDispatch();
  // const [stockData, setStockData] = useState<StockPrice[]>();
  const [stockData, setStockData] = useState<StockPrice[]>([]);
  const [showPrice, setShowPrice] = useState<boolean>(false);
  const now = new Date();
  const utcHours = now.getUTCHours();
  const utcMinutes = now.getUTCMinutes();
  const today = moment();
  const formattedDate = today.format("DDMMYYYY");
  const downloadUrl = `https://stock-report-bucket.s3.ap-east-1.amazonaws.com/report${formattedDate}.docx`;

  useEffect(() => {
    // Check if the current time is between 08:35 and 14:35
    if (
      (utcHours === 8 && utcMinutes >= 35) ||
      (utcHours > 8 && utcHours < 12) ||
      (utcHours === 15 && utcMinutes <= 35)
    ) {
      // If the condition is met, make the div visible
      setReady(true);
    } else {
      setReady(false);
    }
  }, [utcMinutes]);

  const handleClick = async () => {
    try {
      Loading.circle();
      // const response: any = await getReport();
      // Loading.remove();
      // if (response.data.success) {
      //   const base64Data = response.data.file;
      //   const dataUri = `data:application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,${base64Data}`;
      //   setFileUrl(dataUri);
      //   setReady(true);
      // }
      const res = await axios.get(
        `https://x37c35vcxjrpgeqtcqzos3g3ym0jczos.lambda-url.ap-east-1.on.aws/`,
      );

      if (res) {
        Loading.remove();
      }
    } catch (error) {
      Loading.remove();
      console.error("Error:", error);
    }
  };

  const handleDownload = () => {
    // Create a temporary link element
    const link = document.createElement("a");
    link.href = fileUrl;

    // Extract the file name from the data URI
    const fileName = `report${moment(new Date()).format("DDMMYYYY")}.docx`; // Replace "your_custom_file_name" with the desired file name
    link.download = fileName;

    // Append the link to the document and trigger the click event
    document.body.appendChild(link);
    link.click();

    // Remove the temporary link element
    document.body.removeChild(link);
  };

  return (
    <Container>
      {ready ? (
        <div>
          <h2>Your file is ready</h2>
          <a
            href={downloadUrl}
            target="_blank"
          >
            Click here to download
            {/* <div onClick={handleDownload}>Click here to download</div> */}
          </a>
          <p>Click refresh if file is not correct</p>
          <Button onClick={handleClick}>Refresh</Button>
        </div>
      ) : (
        <p>File will be ready between 0835 to 1435 UTC.</p>
      )}
    </Container>
  );
};

export default StocksSelection;
