import * as express from 'express';
import * as cheerio from 'cheerio';

import { Check } from './check';

class App {
  public app: express.Application;

  constructor () {
    this.app = express()
    this.mountRoutes()
  }

  private mountRoutes (): void {
    const router = express.Router()
    router.get('/', async (req, res) => {   
      const $ = cheerio.load(await Check.fetchSite('https://mangadex.org/manga/7139/one-punch-man'));  
      res.send(Check.parseMangaDexSite($));
    });
    this.app.use('/', router)
  }
}

export default new App().app