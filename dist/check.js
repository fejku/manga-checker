"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
class Check {
    static fetchSite(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield axios_1.default.get(url);
            return data;
        });
    }
    static parseMangaDexSite($) {
        return $('.tab-content tbody tr')
            .filter((i, el) => $(el).children('td').eq(3).children().attr('title') === 'English')
            .map((i, el) => ({
            chapter: $(el).children('td').eq(1).children().data('chapter-num'),
            addedTime: $(el).children('td').eq(7).children().attr('datetime'),
        }))
            .get(0);
    }
}
exports.Check = Check;
//# sourceMappingURL=check.js.map