const L=require('./_gen_misc_lib.cjs');const{FOLDERS,wM,wR,co,ra,cu,rel,fleshbane,emit,dump,fs,OUT}=L;
// ---- folder docs ----
const folderDocs=[
 ['The Slaugth',FOLDERS.slaugth,800000],
 ['Hrud Skavengers',FOLDERS.hrud,810000],
 ['The Seraphon',FOLDERS.seraphon,820000],
 ['Agents of the Imperium',FOLDERS.agents,830000],
];
for(const[name,fid,sort]of folderDocs){fs.writeFileSync(`${OUT}/_Folder_Misc_${name.replace(/[^A-Za-z0-9]+/g,'_')}.yml`,dump({name:name,sorting:'a',folder:null,type:'Actor',_id:fid,sort:sort,color:null,flags:{},_key:`!folders!${fid}`}));console.log('folder',name);}
const K_SLAUGTH=['SLAUGTH','One of the worm-mass xenos known as the Slaugth.'];
const ELASTICITY=['Elasticity','This Threat adds +2 bonus dice to all tests to climb or escape from being Restrained.'];
const PSYNULL=['Psychic Null','This Threat cannot be affected by any TELEPATHY psychic powers and adds +2 to the DN of all other psychic powers.'];
const SHROUDCLOAK=['Shroud Cloak','While wearing this cloak, the Threat cannot be detected by an Auspex or similar device and may re-roll Tier dice on Stealth tests.'];
const necroGrasp=(dm)=>wM('Necrotic Grasp',dm,3,0,2,[co('brutal'),fleshbane()],true,'');
const RUIN_GRASP=['Ruin: Necrotic Grasp','When this Threat makes a melee attack, spend 1 Ruin to increase the attack’s range to 5 and to add the Mortal (1) quality.','ruin'];
const FEAR=['Battlecry: Dread Presence','Anyone able to see the Threat must make a DN 5 Fear Test.','battlecry'];
const specs=[
{name:'Slaugth Infiltrator',file:'Misc_Slaugth_Infiltrator.yml',folder:FOLDERS.slaugth,img:'icons/creatures/slimes/slime-movement-dripping-pseudopods-green.webp',attrs:{strength:4,toughness:6,agility:4,initiative:4,willpower:5,intellect:6,fellowship:1},skills:{awareness:7,intimidation:9,stealth:7,tech:7},defPool:6,wounds:10,shock:0,noShock:true,speed:7,detDice:6,tier:['A','A','E','E','T'],armour:['Shroud Cloak',3],keywords:[K_SLAUGTH],
 weapons:[wR('Ripper Ray',11,2,-2,6,12,18,1,[co('pistol'),rel()],true,''),necroGrasp(8)],
 talents:[ELASTICITY,PSYNULL,SHROUDCLOAK,['Undying','This Threat suffers no penalties for being Wounded and cannot suffer the Bleeding condition. They heal 1d3+1 Wounds at the start of each turn.']],
 abilities:[FEAR,['Enunciator','This Threat makes an Intimidation Interaction Test; if successful, the target suffers 1d3 Shock as well.','action'],RUIN_GRASP],
 det:'Necrotic. Spend 1 Ruin to roll 6d6. Each Exalted Icon inflicts 1 Mortal Wound on an enemy within 2m.',notes:'Slaugth Infiltrator — rank-and-file worm-mass xenos that infiltrate isolated outposts to feed; a psychic-null horror that regenerates and cannot be detected by auspex.'},
{name:'Slaugth Overseer',file:'Misc_Slaugth_Overseer.yml',folder:FOLDERS.slaugth,img:'icons/creatures/slimes/slime-giant-face-eyes.webp',attrs:{strength:6,toughness:7,agility:5,initiative:5,willpower:6,intellect:7,fellowship:2},skills:{awareness:9,intimidation:11,scholar:10,stealth:7,tech:8},defPool:8,wounds:13,shock:0,noShock:true,speed:7,detDice:7,tier:['A','A','A','E','E'],armour:['Shroud Cloak',3],keywords:[K_SLAUGTH],
 weapons:[wR('Necrotic Sceptre',13,2,-3,12,24,36,0,[co('brutal'),cu('Careful','careful'),cu('Mortal (1d3)','mortal')],true,''),L.wM('Necrotic Grasp',10,3,0,2,[co('brutal'),fleshbane()],true,'')],
 talents:[['Champion','This Threat may take Ruin Actions and has 3 personal Ruin.'],ELASTICITY,PSYNULL,SHROUDCLOAK,['Undying','This Threat suffers no penalties for being Wounded and cannot suffer the Bleeding condition. They heal 2d3+2 Wounds at the start of each turn.']],
 abilities:[FEAR,['Neurophage','As an action, the Threat consumes the brain of a slain foe and adds 1 Ruin.','action'],RUIN_GRASP],
 det:'Necrotic. Spend 1 Ruin to roll 7d6. Each Exalted Icon inflicts 1 Mortal Wound on an enemy within 2m.',notes:'Slaugth Overseer — a senior, unnervingly intelligent Slaugth that orchestrates cults and conspiracies across whole subsectors from the shadows.'},
];
emit(specs);
