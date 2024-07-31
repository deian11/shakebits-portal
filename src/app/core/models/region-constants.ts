export type Region = {
    regionCode: string;
    regionName: string;
}

export const REGIONS: { [key: string]: Region } = {};

REGIONS['en'] = {
    regionCode: 'en',
    regionName: 'English'
};
REGIONS['ro'] = {
    regionCode: 'ro',
    regionName: 'Romanian'
};
REGIONS['fr'] = {
    regionCode: 'fr',
    regionName: 'French'
};

REGIONS['de'] = {
    regionCode: 'de',
    regionName: 'German'
};
REGIONS['it'] = {
    regionCode: 'it',
    regionName: 'Italian'
};
REGIONS['es'] = {
    regionCode: 'es',
    regionName: 'Spanish'
};

REGIONS['no'] = {
    regionCode: 'no',
    regionName: 'Norwegian'
};
REGIONS['fi'] = {
    regionCode: 'fi',
    regionName: 'Finnish'
};
REGIONS['et'] = {
    regionCode: 'et',
    regionName: 'Estonian'
};

REGIONS['lt'] = {
    regionCode: 'lt',
    regionName: 'Lithuanian'
};
REGIONS['lv'] = {
    regionCode: 'lv',
    regionName: 'Latvian'
};
REGIONS['el'] = {
    regionCode: 'el',
    regionName: 'Greek'
};

REGIONS['sv'] = {
    regionCode: 'sv',
    regionName: 'Swedish'
};
REGIONS['nl'] = {
    regionCode: 'nl',
    regionName: 'Dutch'
};
REGIONS['pt'] = {
    regionCode: 'pt',
    regionName: 'Portuguese'
};

REGIONS['sl'] = {
    regionCode: 'sl',
    regionName: 'Slovenian'
};
REGIONS['sk'] = {
    regionCode: 'sk',
    regionName: 'Slovakian'
};
REGIONS['sr'] = {
    regionCode: 'sr',
    regionName: 'Serbian'
};

REGIONS['tr'] = {
    regionCode: 'tr',
    regionName: 'Turkish'
};
REGIONS['uk'] = {
    regionCode: 'uk',
    regionName: 'Ukrainian'
};
REGIONS['pl'] = {
    regionCode: 'pl',
    regionName: 'Polish'
};

REGIONS['is'] = {
    regionCode: 'is',
    regionName: 'Icelandic'
};
REGIONS['hu'] = {
    regionCode: 'hu',
    regionName: 'Hungarian'
};
REGIONS['mt'] = {
    regionCode: 'mt',
    regionName: 'Maltese'
};


export const regionsCodes: Array<string> = [
    "cs", "de", "ee", 
    "el", "es", "fi", 
    "fr", "hu", "is", 
    "it", "lt", "lv", 
    "mt", "nl", "no", 
    "pl", "pt", "ro", 
    "se", "si", "sk", 
    "sr", "tr", "uk"
];

