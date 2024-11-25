import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import React from "react";

export const CoinOverView = ({ statusUpdate }) => {
  return (
    <Card
      sx={{
        display: "flex",
        maxWidth: 600,
        maxHeight: 600,
        margin: "auto",
        overflow: "hidden",
        padding: 2,
        boxShadow: 3,
        borderRadius: 5,
        "&::-webkit-scrollbar": {
          display: "none"
        },
        "msoverflowstyle": "none",
        "scrollbarwidth": "none"
      }}
      onMouseEnter={(e) => e.currentTarget.style.overflow = "auto"}
      onMouseLeave={(e) => e.currentTarget.style.overflow = "hidden"}
    >
      <CardContent>
        <Typography variant="h5" component="div" sx={{ marginBottom: 2 }}>
          Overview Card
        </Typography>

        <Box display="flex" alignItems="center" sx={{ marginBottom: 2 }}>

          <CardMedia
            component="img"
            sx={{ height: 50, width: 50, borderRadius: "50%" }}
            image={statusUpdate.image?.large}
            alt={`${statusUpdate.name} logo`}
          />

          <Box sx={{ marginLeft: 2 }}>
            <Typography variant="h6">
              {statusUpdate.name} ({statusUpdate.symbol?.toUpperCase()})
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Rank #{statusUpdate.market_cap_rank}
            </Typography>
          </Box>
          
        </Box>
        <Typography variant="body1" sx={{ marginBottom: 2 }}>
          Current Price: $
          {statusUpdate.market_data?.current_price?.usd?.toFixed(2)}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ marginBottom: 2 }}
        >
          Trust Score: {statusUpdate.tickers?.[0]?.trust_score || "N/A"}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {statusUpdate.description?.en}
        </Typography>
      </CardContent>
    </Card>
  );
};
