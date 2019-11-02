const express = require("express");
const path = require("path");
const UsersService = require("./users-service");
const usersRouter = express.Router();
const jsonBodyParser = express.json();
const jsonParser = express.json();
const xss = require("xss");

const { requireAuth } = require("../middleware/jwt-auth");

const serializeUser = user => ({
  id: user.id,
  user_name: xss(user.user_name),
  date_created: user.date_created,
  oct1: user.oct1,
  oct2: user.oct2,
  oct3: user.oct3,
  oct4: user.oct4,
  oct5: user.oct5,
  oct6: user.oct6,
  oct7: user.oct7,
  oct8: user.oct8,
  oct9: user.oct9,
  oct10: user.oct10,
  oct11: user.oct11,
  oct12: user.oct12,
  oct13: user.oct13,
  oct14: user.oct14,
  oct15: user.oct15,
  oct16: user.oct16,
  oct17: user.oct17,
  oct18: user.oct18,
  oct19: user.oct19,
  oct20: user.oct20,
  oct21: user.oct21,
  oct22: user.oct22,
  oct23: user.oct23,
  oct24: user.oct24,
  oct25: user.oct25,
  oct26: user.oct26,
  oct27: user.oct27,
  oct28: user.oct28,
  oct29: user.oct29,
  oct30: user.oct30,
  oct31: user.oct31,
  northbynorthwest: user.northbynorthwest,
  rebecca: user.rebecca,
  the39steps: user.the39steps,
  notorious: user.notorious,
  tocatchathief: user.tocatchathief,
  vertigo: user.vertigo,
  marnie: user.marnie,
  dialmformurder: user.dialmformurder,
  psycho: user.psycho,
  blackmail: user.blackmail,
  rearwindow: user.rearwindow,
  thebirds: user.thebirds,
  frenzy: user.frenzy,
  themanwhoknewtoomuch_remake: user.themanwhoknewtoomuch_remake,
  strangersonatrain: user.strangersonatrain,
  theladyvanishes: user.theladyvanishes,
  rope: user.rope,
  stagefright: user.stagefright,
  topaz: user.topaz,
  thelodger: user.thelodger,
  secretagent: user.secretagent,
  youngandinnocent: user.youngandinnocent,
  spellbound: user.spellbound,
  undercapricorn: user.undercapricorn,
  themanxman: user.themanxman,
  iconfess: user.iconfess,
  thetroublewithharry: user.thetroublewithharry,
  torncurtain: user.torncurtain,
  shadowofadoubt: user.shadowofadoubt,
  familyplot: user.familyplot,
  thewrongman: user.thewrongman,
  suspicion: user.suspicion,
  mrandmrssmith: user.mrandmrssmith,
  theparadinecase: user.theparadinecase,
  themanwhoknewtoomuch: user.themanwhoknewtoomuch,
  murder: user.murder,
  jamaicainn: user.jamaicainn,
  saboteur: user.saboteur,
  foreigncorrespondent: user.foreigncorrespondent,
  sabotage: user.sabotage,
  lifeboat: user.lifeboat,
  thefarmerswife: user.thefarmerswife,
  richandstrange: user.richandstrange,
  champagne: user.champagne,
  easyvirtue: user.easyvirtue,
  thering: user.thering,
  numberseventeen: user.numberseventeen,
  thepleasuregarden: user.thepleasuregarden,
  junoandpaycock: user.junoandpaycock,
  aventuremalgache: user.aventuremalgache,
  bonvoyage: user.bonvoyage,
  theskingame: user.theskingame,
  downhill: user.downhill,
  waltzesfromvienna: user.waltzesfromvienna,
  elstreecalling: user.elstreecalling,
  mary: user.mary,
  themountaineagle: user.themountaineagle,
  soundtestforblackmail: user.soundtestforblackmail,
  alwaystellyourwife: user.alwaystellyourwife,
  thefightinggeneration: user.thefightinggeneration,
  number13: user.number13,
  blackmailsilentversion: user.blackmailsilentversion,
  memoryofthecamps: user.memoryofthecamps,
  anelasticaffair: user.anelasticaffair,
  watchtowerovertomorrow: user.watchtowerovertomorrow,
  alfredhitchcockpresents: user.alfredhitchcockpresents
});

usersRouter
  .route("/")
  .get((req, res, next) => {
    const knexInstance = req.app.get("db");
    UsersService.getAllUsers(knexInstance)
      .then(users => {
        res.json(users.map(serializeUser));
      })
      .catch(next);
  })
  .post(jsonBodyParser, (req, res, next) => {
    const { password, user_name } = req.body;

    for (const field of ["user_name", "password"])
      if (!req.body[field])
        return res.status(400).json({
          error: `Missing '${field}' in request body`
        });

    const passwordError = UsersService.validatePassword(password);

    if (passwordError) return res.status(400).json({ error: passwordError });

    UsersService.hasUserWithUserName(req.app.get("db"), user_name)
      .then(hasUserWithUserName => {
        if (hasUserWithUserName)
          return res.status(400).json({ error: `Username already taken` });

        return UsersService.hashPassword(password).then(hashedPassword => {
          const newUser = {
            user_name,
            password: hashedPassword,
            date_created: "now()"
          };

          return UsersService.insertUser(req.app.get("db"), newUser).then(
            user => {
              res
                .status(201)
                .location(path.posix.join(req.originalUrl, `/${user.id}`))
                .json(UsersService.serializeUser(user));
            }
          );
        });
      })
      .catch(next);
  });

usersRouter
  .route("/:user_id")
  // .all(requireAuth)
  .all(checkUserExists)
  .all((req, res, next) => {
    UsersService.getById(req.app.get("db"), req.params.user_id)
      .then(user => {
        if (!user) {
          return res.status(404).json({
            error: { message: `User doesn't exist` }
          });
        }
        res.user = user;
        next();
      })
      .catch(next);
  })
  .get((req, res, next) => {
    res.json(serializeUser(res.user));
  })
  .delete((req, res, next) => {
    UsersService.deleteUser(req.app.get("db"), req.params.user_id)
      .then(numRowsAffected => {
        res.status(204).end();
      })
      .catch(next);
  })
  .patch(jsonParser, (req, res, next) => {
    const userToUpdate = req.body;
    UsersService.updateUsers(
      req.app.get("db"),
      req.params.user_id,
      userToUpdate
    )
      .then(updatedUser => {
        res.status(204);
        res.send(JSON.stringify(updatedUser));
      })
      .catch(err => {
        res.status(404);
        res.end();
      });
  });

async function checkUserExists(req, res, next) {
  try {
    const user = await UsersService.getById(
      req.app.get("db"),
      req.params.user_id
    );
    if (!user)
      return res.status(404).json({
        error: `User doesn't exist`
      });
    res.user = user;
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = usersRouter;
