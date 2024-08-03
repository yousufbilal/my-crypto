import React from "react";
import { Card, CardContent, CardHeader, Link, Typography, Divider } from "@mui/material";
import { Box } from "@mui/system";

const CoinCommunity = ({ statusUpdate }) => {
  return (
    <Card sx={{ maxWidth: 600, margin: "auto", borderRadius: 2, boxShadow: 3 }}>
      <CardHeader title="Coin Community Links" />
      <CardContent>
        <Divider sx={{ marginBottom: 2 }} />
        
        <Typography variant="h6" component="h3" sx={{ marginTop: 2 }}>
          Blockchain Site
        </Typography>
        <Box sx={{ marginBottom: 2 }}>
          {statusUpdate.links?.blockchain_site.map((link, index) => (
            <Typography key={index} sx={{ marginY: 0.5 }}>
              <Link target="_blank" href={link} underline="hover" sx={{ wordBreak: "break-all" }}>
                {link}
              </Link>
            </Typography>
          ))}
        </Box>

        <Typography variant="h6" component="h3" sx={{ marginTop: 2 }}>
          Homepage
        </Typography>
        <Box sx={{ marginBottom: 2 }}>
          {statusUpdate.links?.homepage.map((link, index) => (
            <Typography key={index} sx={{ marginY: 0.5 }}>
              <Link target="_blank" href={link} underline="hover" sx={{ wordBreak: "break-all" }}>
                {link}
              </Link>
            </Typography>
          ))}
        </Box>

        <Typography variant="h6" component="h3" sx={{ marginTop: 2 }}>
          GitHub Repos
        </Typography>
        <Box sx={{ marginBottom: 2 }}>
          {statusUpdate.links?.repos_url.github.map((link, index) => (
            <Typography key={index} sx={{ marginY: 0.5 }}>
              <Link target="_blank" href={link} underline="hover" sx={{ wordBreak: "break-all" }}>
                {link}
              </Link>
            </Typography>
          ))}
        </Box>

        <Typography variant="h6" component="h3" sx={{ marginTop: 2 }}>
          Reddit
        </Typography>
        <Box sx={{ marginBottom: 2 }}>
          <Typography sx={{ marginY: 0.5 }}>
            <Link
              target="_blank"
              href={statusUpdate.links?.subreddit_url}
              underline="hover"
              sx={{ wordBreak: "break-all" }}
            >
              {statusUpdate.links?.subreddit_url}
            </Link>
          </Typography>
        </Box>

        <Typography variant="h6" component="h3" sx={{ marginTop: 2 }}>
          Whitepaper & Extra Docs
        </Typography>
        <Box sx={{ marginBottom: 2 }}>
          <Typography sx={{ marginY: 0.5 }}>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={statusUpdate.links?.whitepaper}
              underline="hover"
              sx={{ wordBreak: "break-all" }}
            >
              {statusUpdate.links?.whitepaper ? statusUpdate.links?.whitepaper : "NA"}
            </Link>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CoinCommunity;
