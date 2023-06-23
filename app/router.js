import { AboutController } from "./controllers/AboutController.js";
import { HomeController } from "./controllers/HomeController.js";
import { NoteController } from "./controllers/NoteController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";
import { HomeView } from "./views/HomeView.js";


export const router = [
  {
    path: '',
    controller: NoteController,
    view: HomeView
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]