import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import SideBar from "../SideBar/SideBar";
import CoinPrice from "../../Componants/CoinPrice/CoinPrice";
import NivoLineChart from "../../Componants/NivoLineChart/NivoLineChart";
import "./Home.css";

export const Home = () => {

  let dummyData=[
    {
      "id": "japan",
      "color": "hsl(110, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 81
        },
        {
          "x": "helicopter",
          "y": 170
        },
        {
          "x": "boat",
          "y": 108
        },
        {
          "x": "train",
          "y": 171
        },
        {
          "x": "subway",
          "y": 77
        },
        {
          "x": "bus",
          "y": 116
        },
        {
          "x": "car",
          "y": 231
        },
        {
          "x": "moto",
          "y": 130
        },
        {
          "x": "bicycle",
          "y": 188
        },
        {
          "x": "horse",
          "y": 66
        },
        {
          "x": "skateboard",
          "y": 129
        },
        {
          "x": "others",
          "y": 159
        }
      ]
    },
    {
      "id": "france",
      "color": "hsl(175, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 161
        },
        {
          "x": "helicopter",
          "y": 56
        },
        {
          "x": "boat",
          "y": 109
        },
        {
          "x": "train",
          "y": 216
        },
        {
          "x": "subway",
          "y": 215
        },
        {
          "x": "bus",
          "y": 146
        },
        {
          "x": "car",
          "y": 198
        },
        {
          "x": "moto",
          "y": 155
        },
        {
          "x": "bicycle",
          "y": 194
        },
        {
          "x": "horse",
          "y": 264
        },
        {
          "x": "skateboard",
          "y": 267
        },
        {
          "x": "others",
          "y": 1
        }
      ]
    },
    {
      "id": "us",
      "color": "hsl(170, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 169
        },
        {
          "x": "helicopter",
          "y": 62
        },
        {
          "x": "boat",
          "y": 283
        },
        {
          "x": "train",
          "y": 259
        },
        {
          "x": "subway",
          "y": 98
        },
        {
          "x": "bus",
          "y": 41
        },
        {
          "x": "car",
          "y": 122
        },
        {
          "x": "moto",
          "y": 140
        },
        {
          "x": "bicycle",
          "y": 112
        },
        {
          "x": "horse",
          "y": 10
        },
        {
          "x": "skateboard",
          "y": 4
        },
        {
          "x": "others",
          "y": 126
        }
      ]
    },
    {
      "id": "germany",
      "color": "hsl(23, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 177
        },
        {
          "x": "helicopter",
          "y": 279
        },
        {
          "x": "boat",
          "y": 48
        },
        {
          "x": "train",
          "y": 9
        },
        {
          "x": "subway",
          "y": 188
        },
        {
          "x": "bus",
          "y": 242
        },
        {
          "x": "car",
          "y": 8
        },
        {
          "x": "moto",
          "y": 6
        },
        {
          "x": "bicycle",
          "y": 270
        },
        {
          "x": "horse",
          "y": 194
        },
        {
          "x": "skateboard",
          "y": 68
        },
        {
          "x": "others",
          "y": 233
        }
      ]
    },
    {
      "id": "norway",
      "color": "hsl(343, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 176
        },
        {
          "x": "helicopter",
          "y": 38
        },
        {
          "x": "boat",
          "y": 138
        },
        {
          "x": "train",
          "y": 217
        },
        {
          "x": "subway",
          "y": 182
        },
        {
          "x": "bus",
          "y": 204
        },
        {
          "x": "car",
          "y": 291
        },
        {
          "x": "moto",
          "y": 17
        },
        {
          "x": "bicycle",
          "y": 295
        },
        {
          "x": "horse",
          "y": 250
        },
        {
          "x": "skateboard",
          "y": 178
        },
        {
          "x": "others",
          "y": 116
        }
      ]
    }
  ]
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <SideBar />
      <Box sx={{width:"100%"}}>
        <Box 
        sx={{width:"800px" , height:"400px",border:"1px solid red"}}
        >
        <NivoLineChart data={dummyData}/>
        </Box>
        <CoinPrice />
      </Box>
    </Box>
  );
};
