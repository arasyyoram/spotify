import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TrackComponent from "./index";

import { rest } from "msw";
import { setupServer } from "msw/node";
// import App from "../../App";
// import { BrowserRouter } from "react-router-dom";
import playlistResponse from "./response";
import store from "../../components/search/store";
import { Provider } from "react-redux";
import SearchComponent from "../search/index";

test("track component", () => {
  const artists = [{ name: "Taylor Swift" }];
  const album = {
    images: [{ url: "Happy" }],
  };

  render(
    <TrackComponent
      songName="Blank Space"
      artists={artists}
      album={album}
      isHeld={false}
      duration={102374}
    />
  );

  const songName = screen.getByText("Blank Space");
  const artistsRender = screen.getByText("Taylor Swift • 1:42");
  const albumRender = screen.getByAltText("Blank Space");
  const isHeld = screen.getByText("Select");

  expect(songName).toBeInTheDocument();
  expect(artistsRender).toBeInTheDocument();
  expect(albumRender).toBeInTheDocument();
  expect(isHeld).toBeInTheDocument();
});

test("click button on track component", async () => {
  const artists = [{ name: "Taylor Swift" }];
  const album = {
    images: [{ url: "Happy" }],
  };

  const mockHandler = jest.fn();

  render(
    <TrackComponent
      songName="Blank Space"
      artists={artists}
      album={album}
      isHeld={false}
      getSelect={mockHandler}
    />
  );

  const button = screen.getByText("Select");
  userEvent.click(button);

  expect(mockHandler.mock.calls).toHaveLength(1);
});

const url =
  "https://api.spotify.com/v1/search?query=one+ok+rock&type=track&market=ID&locale=en-US%2Cen%3Bq%3D0.9&offset=0&limit=8";

const server = setupServer(
  rest.get(`${url}`, (req, res, ctx) => {
    return res(ctx.json(playlistResponse));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("fetching", async () => {
  render(
    <Provider store={store}>
      <SearchComponent />
    </Provider>
  );

  userEvent.click(screen.getByText("Search"));

  expect(await screen.findByText("Search")).toBeVisible();
});
