BEGIN;

TRUNCATE
  hitchcocktober_movies,
  hitchcocktober_users
  RESTART IDENTITY CASCADE;

INSERT INTO hitchcocktober_users (user_name, password, days)
VALUES
  ('Archimboldi', '$2a$12$VsD.W/HXu8ae0Wih8Vscr.CYSefcj2fCsByOBCxWp1UISXuZaaSV.',
    '{
      "1": {
        "id": 1,
        "movie_id": null,
        "movie": "",
        "meal": "",
        "rating": null
        },
      "2": {
        "id": 2,
        "movie_id": null,
        "movie": "",
        "meal": "",
        "rating": null
        },
      "3": {
        "id": 3,
        "movie_id": null,
        "movie": "",
        "meal": "",
        "rating": null
        },
      "4": {
        "id": 4,
        "movie_id": null,
        "movie": "",
        "meal": "",
        "rating": null
        },
      "5": {
        "id": 5,
        "movie_id": null,
        "movie": "",
        "meal": "",
        "rating": null
        },
      "6": {
        "id": 6,
        "movie_id": null,
        "movie": "",
        "meal": "",
        "rating": null
        },
      "7": {
        "id": 7,
        "movie_id": null,
        "movie": "",
        "meal": "",
        "rating": null
        },
      "8": {
        "id": 8,
        "movie_id": null,
        "movie": "",
        "meal": "",
        "rating": null
        },
      "9": {
        "id": 9,
        "movie_id": null,
        "movie": "",
        "meal": "",
        "rating": null
        },
      "10": {
        "id": 10,
        "movie_id": null,
        "movie": "",
        "meal": "",
        "rating": null
        },
      "11": {
        "id": 11,
        "movie_id": null,
        "movie": "",
        "meal": "",
        "rating": null
        },
      "12": {
        "id": 12,
        "movie_id": null,
        "movie": "",
        "meal": "",
        "rating": null
        },
      "13": {
        "id": 13,
        "movie_id": null,
        "movie": "",
        "meal": "",
        "rating": null
        },
      "14": {
        "id": 14,
        "movie_id": null,
        "movie": "",
        "meal": "",
        "rating": null
        },
      "15": {
        "id": 15,
        "movie_id": null,
        "movie": "",
        "meal": "",
        "rating": null
        },
      "16": {
        "id": 16,
        "movie_id": null,
        "movie": "",
        "meal": "",
        "rating": null
        },
      "17": {
        "id": 17,
        "movie_id": null,
        "movie": "",
        "meal": "",
        "rating": null
        },
      "18": {
        "id": 18,
        "movie_id": null,
        "movie": "",
        "meal": "",
        "rating": null
        },
      "19": {
        "id": 19,
        "movie_id": null,
        "movie": "",
        "meal": "",
        "rating": null
        },
      "20": {
        "id": 20,
        "movie_id": null,
        "movie": "",
        "meal": "",
        "rating": null
        },
      "21": {
        "id": 21,
        "movie_id": null,
        "movie": "",
        "meal": "",
        "rating": null
        },
      "22": {
        "id": 22,
        "movie_id": null,
        "movie": "",
        "meal": "",
        "rating": null
        },
      "23": {
        "id": 23,
        "movie_id": null,
        "movie": "",
        "meal": "",
        "rating": null
        },
      "24": {
        "id": 24,
        "movie_id": null,
        "movie": "",
        "meal": "",
        "rating": null
        },
      "25": {
        "id": 25,
        "movie_id": null,
        "movie": "",
        "meal": "",
        "rating": null
        },
      "26": {
        "id": 26,
        "movie_id": null,
        "movie": "",
        "meal": "",
        "rating": null
        },
      "27": {
        "id": 27,
        "movie_id": null,
        "movie": "",
        "meal": "",
        "rating": null
        },
      "28": {
        "id": 28,
        "movie_id": null,
        "movie": "",
        "meal": "",
        "rating": null
        },
      "29": {
        "id": 29,
        "movie_id": null,
        "movie": "",
        "meal": "",
        "rating": null
        },
     "30": {
        "id": 30,
        "movie_id": null,
        "movie": "",
        "meal": "",
        "rating": null
        },
      "31": {
        "id": 31,
        "movie_id": null,
        "movie": "",
        "meal": "",
        "rating": null
        }
      }
    '
  );

INSERT INTO hitchcocktober_movies (id, title, overview, vote_count, poster_path, popularity, vote_average, release_date)
VALUES
  (213, 'North by Northwest', 'Advertising man Roger Thornhill is mistaken for a spy, triggering a deadly cross-country chase.', 2031, '/aNV789h3oHm2pTHK5Bdq5RuiumZ.jpg', 16.491, 8, '1959-07-17'),
  (223, 'Rebecca', 'Story of a young woman who marries a fascinating widower only to find out that she must live in the shadow of his former wife, Rebecca, who died mysteriously several years earlier. The young wife must come to grips with the terrible secret of her handsome, cold husband, Max De Winter. She must also deal with the jealous, obsessed Mrs. Danvers, the housekeeper, who will not accept her as the mistress of the house.', 712, '/3Gla0nxHboX3nxQzaU4SoqOtTjh.jpg', 13.843, 7.9, '1940-04-12'),
  (260, 'The 39 Steps', 'Richard Hannay stumbles upon a conspiracy that thrusts him into a hectic chase across the Scottish moors—a chase in which he is both the pursuer and the pursued—as well as into an unexpected romance with the cool Pamela.', 421, '/9v283GWj9a0AC8wwC4zriNqY1lZ.jpg', 10.813, 7.4, '1935-08-01'),
  (303, 'Notorious', 'In order to help bring Nazis to justice, U.S. government agent T.R. Devlin recruits Alicia Huberman, the American daughter of a convicted German war criminal, as a spy. As they begin to fall for one another, Alicia is instructed to win the affections of Alexander Sebastian, a Nazi hiding out in Brazil. When Sebastian becomes serious about his relationship with Alicia, the stakes get higher, and Devlin must watch her slip further undercover.', 712, '/vcdSvOr5NcY6alt0kBqDQlFC3Nk.jpg', 14.733, 7.9, '1946-08-15'),
  (381, 'To Catch a Thief', 'To prevent being accused of the crimes, an ex-burglar must catch a thief who’s been copying his style.', 633, '/wizxvCHhWTpJXxRew6FGPGFWTVl.jpg', 13.295, 7.4, '1955-08-03'),
  (426, 'Vertigo', 'A retired San Francisco detective suffering from acrophobia investigates the strange activities of an old friends wife, all the while becoming dangerously obsessed with her.', 2722, '/obhM86qyv8RsE69XSMTtT9FdE0b.jpg', 23.011, 8.2, '1958-05-09'),
  (506, 'Marnie', 'Marnie is a thief, a liar, and a cheat. When her new boss, Mark Rutland, catches on to her routine kleptomania, she finds herself being blackmailed.', 467, '/mwEuBWMJyebtJ1OP4W2jeRcVf3k.jpg', 10.28, 7.3, '1964-07-22'),
  (521, 'Dial M for Murder', 'An ex-tennis pro carries out a plot to have his wife murdered after discovering she is having an affair, and assumes she will soon leave him for the other man anyway. When things go wrong, he improvises a new plan—to frame her for murder instead.', 1182, '/xrpK1PyckNWmRxU4kZURfaCyboS.jpg', 30.501, 8, '1954-05-29'),
  (539, 'Psycho', 'When larcenous real estate clerk Marion Crane goes on the lam with a wad of cash and hopes of starting a new life, she ends up at the notorious Bates Motel, where manager Norman Bates cares for his housebound mother. The place seems quirky, but fine… until Marion decides to take a shower.', 5408, '/81d8oyEFgj7FlxJqSDXWr8JH8kV.jpg', 31.825, 8.4, '1960-09-08'),
  (543, 'Blackmail', 'Alices boyfriend Frank is a Scotland Yard detective who seems more interested in police work than in her. When she agrees to go out with another man, he attacks her and she defends herself and kills him. When the body is discovered, Frank is assigned to the case. He quickly discovers that Alice is the killer, but so has someone else, and they are threatening blackmail.', 88, '/xmKRYOyx3AGjlbWhkcSZFo75lIP.jpg', 6.403, 6.7, '1929-10-06'),
  (567, 'Rear Window', 'Professional photographer L.B. Jeff Jeffries breaks his leg while getting an action shot at an auto race. Confined to his New York apartment, he spends his time looking out of the rear window observing the neighbors. When he begins to suspect that a man across the courtyard may have murdered his wife. Jeff enlists the help of his high society fashion-consultant girlfriend and his visiting nurse to investigate.', 3138, '/oXbT7vlLmZ76kWoHe5XJYuyJUgp.jpg', 20.246, 8.3, '1954-08-04'),
  (571, 'The Birds', 'Chic socialite Melanie Daniels enjoys a passing flirtation with an eligible attorney in a San Francisco pet shop and, on an impulse, follows him to his hometown bearing a gift of lovebirds. But upon her arrival, the bird population runs amok. Suddenly, the townsfolk face a massive avian onslaught, with the feathered fiends inexplicably attacking people all over Bodega Bay.', 2038, '/z0iYrJ6GsAMP3abOha7uGMuc5kZ.jpg', 17.975, 7.5, '1963-03-28'),
  (573, 'Frenzy', 'After a serial killer strangles several women with a necktie, London police identify a suspect—but he is the wrong man.', 339, '/4SFvqrlSigAt9tnhXFSMyKeJWQk.jpg', 15.898, 7.2, '1972-06-21'),
  (574, 'The Man Who Knew Too Much', 'A widescreen, Technicolor remake by Hitchcock of his 1934 film of the same title. A couple vacationing in Morocco with their young son accidentally stumble upon an assassination plot. When the child is kidnapped to ensure their silence, they have to take matters into their own hands to save him.', 610, '/vhUOukoJTWPfVpZOiKwrjdEV4OX.jpg', 29.766, 7.5, '1956-06-01'),
  (845, 'Strangers on a Train', 'A psychotic socialite confronts a pro tennis star with a theory on how two complete strangers can get away with murder—a theory that he plans to implement.', 753, '/ihC083U7ef56Ui4x0P0dobojrZ1.jpg', 12.503, 7.8, '1951-06-30'),
  (940, 'The Lady Vanishes', 'On a train headed for England a group of travelers is delayed by an avalanche. Holed up in a hotel in a fictional European country, young Iris befriends elderly Miss Froy. When the train resumes, Iris suffers a bout of unconsciousness and wakes to find the old woman has disappeared. The other passengers ominously deny Miss Froy ever existed, so Iris begins to investigate with another traveler and, as the pair sleuth, romantic sparks fly.', 344, '/edL8YmyR1BjICz3mp1fhUqSOPnF.jpg', 10.023, 7.6, '1938-11-01'),
  (1580, 'Rope', 'Two young men strangle their "inferior" classmate, hide his body in their apartment, and invite his friends and family to a dinner party as a means to challenge the "perfection" of their crime.', 1193, '/tJlmMbaleBT8IwuidgI0ZvlLbWA.jpg', 13.516, 8, '1948-08-26'),
  (1978, 'Stage Fright', 'A struggling actress tries to help a friend prove his innocence when he is accused of murdering the husband of a high society entertainer.', 111, '/1W7RzrENooOXQVeYMlF8Vx3EpAk.jpg', 7.529, 6.8, '1950-02-23'),
  (2370, 'Topaz', 'A French intelligence agent becomes embroiled in the Cold War politics first with uncovering the events leading up to the 1962 Cuban Missle Crisis, and then back to France to break up an international Russian spy ring.', 145, '/8u7vxykCVZoaxNocLbpstv3IFNK.jpg', 10.935, 6.1, '1969-12-19'),
  (2760, 'The Lodger: A Story of the London Fog', 'A landlady suspects her new lodger is the madman killing women in London.', 106, '/feCIblDiTU1L2uWTi3rtYw6Nzyz.jpg', 6.995, 106, '1928-06-10'),
  (2761, 'Secret Agent', 'After three British agents are assigned to assassinate a mysterious German spy during World War I, two of them become ambivalent when their duty to the mission conflicts with their consciences.', 55, '/i1LsfCAuZWZsI5S5ewvQ3RCrXOc.jpg', 5.194, 6.4, '1936-06-12'),
  (2762, 'Young and Innocent', 'Robert Tisdall finds on the beach the corpse of a woman. Unfortunately, due to a misunderstanding he is believed to be the murderer, so he flees, despite his innocence. In his desperate attempt to prove that he is not the culprit, he will only count on the help of a young girl.', 78, '/8teH96d4Hcg1BWwCePXcuHrcYxw.jpg', 6.552, 6.9, '1938-02-10'),
  (4174, 'Spellbound', 'When Dr. Anthony Edwardes arrives at a Vermont mental hospital to replace the outgoing hospital director, Dr. Constance Peterson, a psychoanalyst, discovers Edwardes is actually an impostor. The man confesses that the real Dr. Edwardes is dead and fears he may have killed him, but cannot recall anything. Dr. Peterson, however is convinced his impostor is innocent of the mans murder, and joins him on a quest to unravel his amnesia through psychoanalysis.', 356, '/pptQGmwPvOI49UYp5cMHo976y4d.jpg', 11.478, 7.5, '1945-12-28'),
  (4175, 'Under Capricorn', 'In 1831, Irishman Charles Adare travels to Australia to start a new life with the help of his cousin who has just been appointed governor. When he arrives he meets powerful landowner and ex-convict, Sam Flusky, who wants to do a business deal with him. Whilst attending a dinner party at Fluskys house, Charles meets Fluskys wife Henrietta who he had known as a child back in Ireland. Henrietta is an alcoholic and seems to be on the verge of madness.', 47, '/7cHluGXnrzwSA7Etze5pliNQ03m.jpg', 4.967, 6.4, '1949-09-08'),
  (20213, 'The Manxman', 'A fisherman and a rising lawyer who grew up as brothers fall in love with the same woman.', 21, '/6cpyL7msoojckIUmGPXkj7PPWJe.jpg', 3.01, 6, '1929-12-16'),
  (30159, 'I Confess', 'Unable, due to the seal of the confessional, to be forthcoming with information that would serve to clear himself during a murder investigation, a priest becomes the prime suspect.', 158, '/c6p42IXpKE3fgXMIgxO4zqUWiGs.jpg', 9.196, 7.2, '1953-02-28'),
  (11219, 'The Trouble with Harry', 'Trouble erupts in a small, quiet New England town when a mans body is found in the woods. The problem is that almost everyone in town thinks that they had something to do with his death.', 331, '/tXq2vB69rv6uqqkyiqfxci0TMgZ.jpg', 12.499, 7, '1955-10-03'),
  (5780, 'Torn Curtain', 'During the Cold War, an American scientist appears to defect to East Germany as part of a cloak and dagger mission to find the formula for a resin solution, but the plan goes awry when his fiancee, unaware of his motivation, follows him across the border.', 233, '/pwiU7euYflFMaUbatvX3La0YgtO.jpg', 9.062, 6.6, '1966-07-13'),
  (21734, 'Shadow of a Doubt', 'A bored teen living in Santa Rosa, California, Charlotte "Charlie" Newton, is frustrated because nothing seems to be happening in her life and that of her family. Then, she receives wonderful news: her uncle (for whom she was named), Charlie Oakley, is arriving for a visit. But Uncle Charlie may not be the man he seems to be.', 419, '/ptyWagbWE8jSGyV2tGEzAdVbRCj.jpg', 11.306, 7.7, '1943-01-16'),
  (5854, 'Family Plot', 'Lighthearted suspense film about a phony psychic/con artist and her taxi driver/private investigator boyfriend who encounter a pair of serial kidnappers while trailing a missing heir in California.', 167, '/6VPkrvTFpTGb4QJFWceMd6Y7IPp.jpg', 10.464, 6.8, '1976-04-09'),
  (22527, 'The Wrong Man', 'True story of an innocent man mistaken for a criminal.', 199, '/2FDF4Z7QjH9V2j7MBO1F1mTnONQ.jpg', 8.44, 7.1, '1956-12-22'),
  (11462, 'Suspicion', 'Wealthy, sheltered Lina McLaidlaw is swept off her feet by charming ner-do-well Johnnie Aysgarth. Though warned that Johnnie is little more than a fortune hunter, Lina marries him anyway and remains loyal to her irresponsible husband as he plows his way from one disreputable business scheme to another. Gradually Lina comes to the conclusion that Johnnie intends to kill her in order to collect her inheritance. The suspicion seems confirmed when Johnnies business partner dies under mysterious circumstances.', 277, '/5sexQMYELq1WFl1eLFw5Nn3T3sL.jpg', 9.697, 7.3, '1941-11-14'),
  (24197, 'Mr. & Mrs. Smith', 'Ann and David Smith are a happily married couple living in New York. One morning, Ann asks David if he had to do it over again, would he marry her? To her shock, he answers he would not. Later that day, they both separately find out that, due to a complication when they married three years ago, they are in fact not legally married. Ann does not mention this to David, and thinks he will remarry her that very night after he takes her out to a romantic dinner. When this does not happen, she angrily kicks David out of their home.', 65, '/lY3Jd8O8Oz6aMpasPFBzHASzLQd.jpg', 6.049, 6.1, '1941-01-31'),
  (31667, 'The Paradine Case', 'The beautiful Mrs. Paradine is accused of poisoning her older, blind husband. She hires married Anthony Keane as her lawyer and when he begins to fall in love with her, she encourages him.', 88, '/kSlUZFHmAqqSE7A1LoHDqgzrIMy.jpg', 9.185, 6.2, '1947-12-31'),
  (8208, 'The Man Who Knew Too Much', 'While vacationing in St. Moritz, a British couple receive a clue to an imminent assassination attempt, only to learn that their young daughter has been kidnapped to keep them quiet.', 157, '/AvOa83nHSNJBpOPK0IJLz01r0c6.jpg', 7.45, 6.6, '1935-03-22'),
  (31930, 'Murder!', 'When a woman is convicted of murder, one of the jurors selected to serve on the murder-trial jury believes the accused, an aspiring actress, is innocent of the crime and takes it upon himself to apprehend the real killer.', 40, '/xnxsea6yRsLYaE69sPy69fjhDbi.jpg', 4.898, 6.2, '1930-11-24'),
  (31995, 'Jamaica Inn', 'In coastal Cornwall, England, during the early 19th Century, a young woman discovers that she is living with a gang of criminals who arrange shipwrecking for profit.', 79, '/80V3ScsMRzsuLF0T17SlRN4tiah.jpg', 6.357, 6, '1939-10-11'),
  (31997, 'Saboteur', 'Aircraft factory worker, Barry Kane goes on the run across the United States when he is wrongly accused of starting a fire that killed his best friend.', 187, '/lHxHdcUEmomTDPssLwevpgruWEI.jpg', 9.953, 6.9, '1942-04-24'),
  (25670, 'Foreign Correspondent', 'The European war was only beginning to erupt across national borders. Johnny Jones, an American crime reporter dispatched by his New York publisher to put a fresh spin on the drowsy dispatches emanating from overseas, has a nose for a good story—which promptly leads him to the crime of fascism and Nazi Germanys designs on European conquest. In attempting to learn more about a seemingly noble peace effort, Jones walks into the middle of an assassination, uncovers a spy ring and—not entirely coincidentally—falls in love.', 141, '/voiObyqh8LDAOdnBCKD1ZuoPVbL.jpg', 6.981, 7.2, '1940-08-16'),
  (12684, 'Sabotage', 'A Scotland Yard undercover detective is on the trail of a saboteur who is part of a plot to set off a bomb in London. But when the detectives cover is blown, the plot begins to unravel.', 119, '/9DM9MPN6jtvIhqvadCFTPBQZwiW.jpg', 8.586, 6.8, '1937-01-11'),
  (13321, 'Lifeboat', 'During World War II, a small group of survivors is stranded in a lifeboat together after the ship they were traveling on is destroyed by a German U-boat.', 199, '/AfHjGkg3g9yTLhYtls8fSUuOKNt.jpg', 10.743, 7.5, '1944-01-11'),
  (35832, 'The Farmers Wife', 'Successful middle-aged farmer Samuel Sweetland becomes widowed, then his daughter marries and leaves home. Deciding he wishes to remarry, Sweetland pursues some local women he considers prospects.', 24, '/hs5z3ZeUc7VXmdhkliM1nGn6d5z.jpg', 3.375, 5.8, '1930-01-04'),
  (36049, 'Rich and Strange', 'An unexpected inheritance proves less than a boon to a young married couple.', 30, '/5Gi7PAUjzNHfZ1TbnQuDfUqKycp.jpg', 4.395, 5.7, '1931-12-10'),
  (36054, 'Champagne', 'Betty, rebellious daughter of a millionaire, decides to marry the pennyless Jean, against her fathers will. She runs away to France and she starts living a life of luxury on the profits from her fathers business. The rich man decides to put a stop to her behavior pretending his business crashed. Betty now has to find money by herself and she gets a job in a night club.', 21, '/uQ4J0umdET3WHPHd6VsDpIoddnx.jpg', 2.869, 5.6, '1928-08-20'),
  (36055, 'Easy Virtue', 'Larita Filton is named as correspondent in a scandalous divorce case. She escapes to France to rebuild her life where she meets John Whittaker. They are later married, but Johns well-to-do family finds out Laritas secret.', 24, '/blrQSfCOBJAKxWptjRnVI3AYvH2.jpg', 3.623, 5.4, '1928-03-05'),
  (36056, 'The Ring', 'Both Jack Sander and Bob Corby are boxers in love with Mabel. Jack and Mabel wed, but their marriage is flat. The young wife looks to Bob for comfort.', 32, '/gQRoIfnyWbBtMjLqbDY0wPulBfX.jpg', 2.731, 6.1, '1927-10-01'),
  (15007, 'Number Seventeen', 'A gang of thieves gather at a safe house following a robbery, but a detective is on their trail.', 39, '/iLCy8ca0xfZNwCU23nEWfLFVOA5.jpg', 5.184, 5.7, '1932-07-18'),
  (64398, 'The Pleasure Garden', 'Patsy Brand is a chorus girl at the Pleasure Garden music hall. She meets Jill Cheyne who is down on her luck and gets her a job as a dancer. Jill meets adventurer Hugh Fielding and they get engaged, but when Hugh travels out of the country, she begins to play around.', 17, '/yDYugOZtCTa5wkUXuO57ewl8KfM.jpg', 1.957, 5.7, '1925-11-03'),
  (47695, 'Juno and the Paycock', 'During the Irish revolution, a family earns a big inheritance. They start leading a rich life forgetting what the most important values of are. At the end, they discover they will not receive that inheritance; the family is destroyed and penniless. They must sell their home and start living like vagabonds.', 15, '/lGsScGu3pktbddUApGfLp0m6I9G.jpg', 3.275, 5, '1930-06-29'),
  (48133, 'Aventure Malgache', 'The Moliere players are in their dressing room getting ready to go on set. One actor mentions to another that his face reminds him of an opportunist turncoat he once knew when he was in the Resistance in France. He relates the adventure that he had in the Resistance - running an illegal radio station and dodging the Nazis.', 23, '/59aHxiBWsYGgIgsx66XLEuyWlV9.jpg', 1.753, 5.7, '1944-01-01'),
  (48140, 'Bon Voyage', 'A young Scottish RAF gunner is debriefed by French officials about his escape from NAZI occupied territory and they are particularly interested in one person who may or may not have been a German agent.', 30, '/3TFHth4jy9c1oyjTTlQecFZnI2Q.jpg', 3.779, 5.8, '1944-01-01'),
  (52748, 'The Skin Game', 'An old traditional family and a modern family battle over land in a small English village and almost destroy each other.', 23, '/oIAqrTSB42jWNlbW8Q5SLYwhO4Z.jpg', 4.714, 5.2, '1931-06-20'),
  (52782, 'Downhill', 'After public school student Roddy Berwick takes the blame for a friends transgression and is expelled, his life goes downhill.', 21, '/p3ZTJIjcl1jBzlXfrmQXFbjvtCy.jpg', 3.234, 6.2, '1927-10-24'),
  (52907, 'Waltzes from Vienna', 'The story of Johann Strauss the elder and younger.', 15, '/jnXsVjBSfcgRxFOmxZpbwCe2Mrg.jpg', 2.597, 5.5, '1934-03-15'),
  (75793, 'Elstree Calling', 'A series of 19 musical and comedy "vaudeville" sketches presented in the form of a live broadcast hosted by Tommy Handley (as himself). There are two "running gags" which connect the sketches. In one, an actor wants to perform Shakespeare, but he is continually denied air-time. The other gag has an inventor trying to view the broadcast on television.', 4, '/lEcipqsopVzxviueMscA0BHBiul.jpg', 1.169, 4.6, '1930-02-01'),
  (97867, 'Mary', 'A juror in a murder trial, after voting to convict, has second thoughts and begins to investigate on his own before the execution. German version of "Murder."', 5, '/rl5iDfbe0RVcCu7P6Xg3IQHo4Rs.jpg', 2.195, 5.8, '1931-03-02'),
  (106439, 'The Mountain Eagle', 'In the Kentucky hills a store keeper tries to win the love of an innocent schoolteacher. She runs away and seeks refuge with a hermit.', 2, '/9vfuusCYl8swxtEzzcQHHTNnVyb.jpg', 0.637, 3, '1926-11-01'),
  (319841, 'Sound Test for Blackmail', 'The short sequence, photographed by Jack E Cox, has Hitchcock trying his best to embarrass the films Czech lead Anny Ondra, who ends up giggling and turning her back to the camera...', 7, '/dLlSkryfsyKRpH526jcpNQgQe4p.jpg', 1.692, 6.9, '1929-01-01'),
  (387698, 'Always Tell Your Wife', 'A comedic short filmed directed by an uncredited Alfred Hitchcock about an affair.', 1, '/yVI9HN6IIuuaRdDo4C3iXa0ewZp.jpg', 0.871, 10, '1923-02-10'),
  (414019, 'The Fighting Generation', 'A 1944 propaganda short film produced for the U.S. Treasury Department and intended to boost war bond sales, directed by an uncredited Alfred Hitchcock and starring Jennifer Jones as a nurses aide.', 3, '/mCHg0oMC9uw24QeBQczgp1hkSZh.jpg', 0.681, 6.7, '1944-10-01'),
  (442196, 'Number 13', 'This unfinished, never-released 1922 Alfred Hitchcock-directed film was about low-income residents of a tenement building.', 1, '/hLNBCOqKjYej3aGCHPexiwMbT1U.jpg', 0.742, 2, 'Never released'),
  (493439, 'Blackmail (Silent Version)', 'Alice White is the daughter of a shopkeeper in 1920s London. Her boyfriend, Frank Webber is a Scotland Yard detective who seems more interested in police work than in her. Frank takes Alice out one night, but she has secretly arranged to meet another man. Later that night Alice agrees to go back to his flat to see his studio. The man has other ideas and as he tries to rape Alice, she defends herself and kills him with a bread knife. When the body is discovered, Frank is assigned to the case, he quickly determines that Alice is the killer, but so has someone else and blackmail is threatened.', 2, '/oa0Ie4BA3W7WooNy1rVS58jzfxy.jpg', 0.6, 8, '1929-06-30'),
  (254642, 'Memory of the Camps', 'On the 29th September 1945, the incomplete rough cut of a brilliant documentary about concentration camps was viewed at the MOI in London. For five months, Sidney Bernstein had led a small team – which included Stewart McAllister, Richard Crossman and Alfred Hitchcock – to complete the film from hours of shocking footage. Unfortunately, this ambitious Allied project to create a feature-length visual report that would damn the Nazi regime and shame the German people into acceptance of Allied occupation had missed its moment. Even in its incomplete form (available since 1984) the film was immensely powerful, generating an awed hush among audiences. But now, complete to six reels, this faithfully restored and definitive version produced by IWM, is being compared with Alain Resnais’ Night and Fog (1955).', 1, '/z60nncQ3fdMOQP7K8sduljE33rx.jpg', 2.063, 7, '2015-07-26'),
  (510844, 'An Elastic Affair', 'This movie has no overview', 0, '/ycXFOu2YvJqZ648gVD750iaXplB.jpg', 0.841, 0, '1930-01-19'),
  (510849, 'Watchtower Over Tomorrow', 'Short documentary film about the Dumbarton Oaks plan and the proposed formation of the United Nations.', 0, '/2WcI3YfQW5xiqWEMcrEH5xWmvv.jpg', 1.341, 0, '1945-03-29'),
  (5273, 'Alfred Hitchcock Presents', 'Alfred Hitchcock Presents is an American television anthology series hosted by Alfred Hitchcock. The series featured dramas, thrillers, and mysteries. By the time the show premiered on October 2, 1955, Hitchcock had been directing films for over three decades. Time magazine named Alfred Hitchcock Presents one of "The 100 Best TV Shows of All-TIME." A series of literary anthologies with the running title Alfred Hitchcock Presents were issued to capitalize on the success of the television series. One volume, devoted to stories that censors would not allow to be adapted for the TV series, was entitled Alfred Hitchcock Presents: Stories They Would Not Let Me Do on TV—though eventually several of the stories collected were adapted.', 84, '/sHzG8lDfn5wKiieBsh0Qg5DXWNQ.jpg', 24.726, 8, '1955-10-02');

  COMMIT;


