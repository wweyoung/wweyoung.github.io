(() => {
    'use strict';

    const PALETTE_211 = [
        { code: 'A1', r: 0xFA, g: 0xF4, b: 0xC8 }, { code: 'A2', r: 0xFF, g: 0xFF, b: 0xD5 },
        { code: 'A3', r: 0xFE, g: 0xFF, b: 0x8B }, { code: 'A4', r: 0xFB, g: 0xED, b: 0x56 },
        { code: 'A5', r: 0xF4, g: 0xD7, b: 0x38 }, { code: 'A6', r: 0xFE, g: 0xAC, b: 0x4C },
        { code: 'A7', r: 0xFE, g: 0x8B, b: 0x4C }, { code: 'A8', r: 0xFF, g: 0xDA, b: 0x45 },
        { code: 'A9', r: 0xFF, g: 0x99, b: 0x5B }, { code: 'A10', r: 0xF7, g: 0x7C, b: 0x31 },
        { code: 'A11', r: 0xFF, g: 0xDD, b: 0x99 }, { code: 'A12', r: 0xFE, g: 0x9F, b: 0x72 },
        { code: 'A13', r: 0xFF, g: 0xC3, b: 0x65 }, { code: 'A14', r: 0xFD, b: 0x54, g: 0x3D },
        { code: 'A15', r: 0xFF, g: 0xF3, b: 0x65 }, { code: 'A16', r: 0xFF, g: 0xFF, b: 0x9F },
        { code: 'A17', r: 0xFF, g: 0xE3, b: 0x6E }, { code: 'A18', r: 0xFE, g: 0xBE, b: 0x7D },
        { code: 'A19', r: 0xFD, g: 0x7C, b: 0x72 }, { code: 'A20', r: 0xFF, g: 0xD5, b: 0x68 },
        { code: 'A21', r: 0xFF, g: 0xE3, b: 0x95 }, { code: 'A22', r: 0xF4, g: 0xF5, b: 0x7D },
        { code: 'A23', r: 0xE6, g: 0xC9, b: 0xB7 }, { code: 'A24', r: 0xF7, g: 0xF8, b: 0xA2 },
        { code: 'A25', r: 0xFF, g: 0xD6, b: 0x7D }, { code: 'A26', r: 0xFF, g: 0xC8, b: 0x30 },
        { code: 'B1', r: 0xE6, g: 0xEE, b: 0x31 }, { code: 'B2', r: 0x63, g: 0xF3, b: 0x47 },
        { code: 'B3', r: 0x9E, g: 0xF7, b: 0x80 }, { code: 'B4', r: 0x5D, g: 0xE0, b: 0x35 },
        { code: 'B5', r: 0x35, g: 0xE3, b: 0x52 }, { code: 'B6', r: 0x65, g: 0xE2, b: 0xA6 },
        { code: 'B7', r: 0x3D, g: 0xAF, b: 0x80 }, { code: 'B8', r: 0x1C, g: 0x9C, b: 0x4F },
        { code: 'B9', r: 0x27, g: 0x52, b: 0x3A }, { code: 'B10', r: 0x95, g: 0xD3, b: 0xC2 },
        { code: 'B11', r: 0x5D, g: 0x72, b: 0x2A }, { code: 'B12', r: 0x16, g: 0x6F, b: 0x41 },
        { code: 'B13', r: 0xCA, g: 0xEB, b: 0x7B }, { code: 'B14', r: 0xAD, g: 0xE9, b: 0x46 },
        { code: 'B15', r: 0x2E, g: 0x51, b: 0x32 }, { code: 'B16', r: 0xC5, g: 0xED, b: 0x9C },
        { code: 'B17', r: 0x9B, g: 0xB1, b: 0x3A }, { code: 'B18', r: 0xE6, g: 0xEE, b: 0x49 },
        { code: 'B19', r: 0x24, g: 0xB8, b: 0x8C }, { code: 'B20', r: 0xC2, g: 0xF0, b: 0xCC },
        { code: 'B21', r: 0x15, g: 0x6A, b: 0x6B }, { code: 'B22', r: 0x0B, g: 0x3C, b: 0x43 },
        { code: 'B23', r: 0x30, g: 0x3A, b: 0x21 }, { code: 'B24', r: 0xEE, g: 0xFC, b: 0xA5 },
        { code: 'B25', r: 0x4E, g: 0x84, b: 0x6D }, { code: 'B26', r: 0x8D, g: 0x7A, b: 0x35 },
        { code: 'B27', r: 0xCC, g: 0xE1, b: 0xAF }, { code: 'B28', r: 0x9E, g: 0xE5, b: 0xB9 },
        { code: 'B29', r: 0xC5, g: 0xE2, b: 0x54 }, { code: 'B30', r: 0xE2, g: 0xFC, b: 0xB1 },
        { code: 'B31', r: 0xB0, g: 0xE7, b: 0x92 }, { code: 'B32', r: 0x9C, g: 0xAB, b: 0x5A },
        { code: 'C1', r: 0xE8, g: 0xFF, b: 0xE7 }, { code: 'C2', r: 0xA9, g: 0xF9, b: 0xFC },
        { code: 'C3', r: 0xA0, g: 0xE2, b: 0xFB }, { code: 'C4', r: 0x41, g: 0xCC, b: 0xFF },
        { code: 'C5', r: 0x01, g: 0xAC, b: 0xEB }, { code: 'C6', r: 0x50, g: 0xAA, b: 0xF0 },
        { code: 'C7', r: 0x36, g: 0x77, b: 0xD2 }, { code: 'C8', r: 0x0F, g: 0x54, b: 0xC0 },
        { code: 'C9', r: 0x32, g: 0x4B, b: 0xCA }, { code: 'C10', r: 0x3E, g: 0xBC, b: 0xE2 },
        { code: 'C11', r: 0x28, g: 0xDD, b: 0xDE }, { code: 'C12', r: 0x1C, g: 0x33, b: 0x4D },
        { code: 'C13', r: 0xCD, g: 0xE8, b: 0xFF }, { code: 'C14', r: 0xD5, g: 0xFD, b: 0xFF },
        { code: 'C15', r: 0x22, g: 0xC4, b: 0xC6 }, { code: 'C16', r: 0x15, g: 0x57, b: 0xA8 },
        { code: 'C17', r: 0x04, g: 0xD1, b: 0xF6 }, { code: 'C18', r: 0x1D, g: 0x33, b: 0x44 },
        { code: 'C19', r: 0x18, g: 0x87, b: 0xA2 }, { code: 'C20', r: 0x17, g: 0x6D, b: 0xAF },
        { code: 'C21', r: 0xBE, g: 0xDD, b: 0xFF }, { code: 'C22', r: 0x67, g: 0xB4, b: 0xBE },
        { code: 'C23', r: 0xC8, g: 0xE2, b: 0xFF }, { code: 'C24', r: 0x7C, g: 0xC4, b: 0xFF },
        { code: 'C25', r: 0xA9, g: 0xE5, b: 0xE5 }, { code: 'C26', r: 0x3C, g: 0xAE, b: 0xD8 },
        { code: 'C27', r: 0xD3, g: 0xDF, b: 0xFA }, { code: 'C28', r: 0xBB, g: 0xCF, b: 0xED },
        { code: 'C29', r: 0x34, g: 0x48, b: 0x8E }, { code: 'D1', r: 0xAE, g: 0xB4, b: 0xF2 },
        { code: 'D2', r: 0x85, g: 0x8E, b: 0xDD }, { code: 'D3', r: 0x2F, g: 0x54, b: 0xAF },
        { code: 'D4', r: 0x18, g: 0x2A, b: 0x84 }, { code: 'D5', r: 0xB8, g: 0x43, b: 0xC5 },
        { code: 'D6', r: 0xAC, g: 0x7B, b: 0xDE }, { code: 'D7', r: 0x88, g: 0x54, b: 0xB3 },
        { code: 'D8', r: 0xE2, g: 0xD3, b: 0xFF }, { code: 'D9', r: 0xD5, g: 0xB9, b: 0xF8 },
        { code: 'D10', r: 0x36, g: 0x18, b: 0x51 }, { code: 'D11', r: 0xB9, g: 0xBA, b: 0xE1 },
        { code: 'D12', r: 0xDE, g: 0x9A, b: 0xD4 }, { code: 'D13', r: 0xB9, g: 0x00, b: 0x95 },
        { code: 'D14', r: 0x8B, g: 0x27, b: 0x9B }, { code: 'D15', r: 0x2F, g: 0x1F, b: 0x90 },
        { code: 'D16', r: 0xE3, g: 0xE1, b: 0xEE }, { code: 'D17', r: 0xC4, g: 0xD4, b: 0xF6 },
        { code: 'D18', r: 0xA4, g: 0x5E, b: 0xC7 }, { code: 'D19', r: 0xD8, g: 0xC3, b: 0xD7 },
        { code: 'D20', r: 0x9C, g: 0x32, b: 0xB2 }, { code: 'D21', r: 0x9A, g: 0x00, b: 0x9B },
        { code: 'D22', r: 0x33, g: 0x3A, b: 0x95 }, { code: 'D23', r: 0xEB, g: 0xDA, b: 0xFC },
        { code: 'D24', r: 0x77, g: 0x86, b: 0xE5 }, { code: 'D25', r: 0x49, g: 0x4F, b: 0xC7 },
        { code: 'D26', r: 0xDF, g: 0xC2, b: 0xF8 }, { code: 'E1', r: 0xFD, g: 0xD3, b: 0xCC },
        { code: 'E2', r: 0xFE, g: 0xC0, b: 0xDF }, { code: 'E3', r: 0xFF, g: 0xB7, b: 0xE7 },
        { code: 'E4', r: 0xE8, g: 0x64, b: 0x9E }, { code: 'E5', r: 0xF5, g: 0x51, b: 0xA2 },
        { code: 'E6', r: 0xF1, g: 0x3D, b: 0x74 }, { code: 'E7', r: 0xC6, g: 0x34, b: 0x78 },
        { code: 'E8', r: 0xFF, g: 0xDB, b: 0xE9 }, { code: 'E9', r: 0xE9, g: 0x70, b: 0xCC },
        { code: 'E10', r: 0xD3, g: 0x37, b: 0x93 }, { code: 'E11', r: 0xFC, g: 0xDD, b: 0xD2 },
        { code: 'E12', r: 0xF7, g: 0x8F, b: 0xC3 }, { code: 'E13', r: 0xB5, g: 0x00, b: 0x6D },
        { code: 'E14', r: 0xFF, g: 0xD1, b: 0xBA }, { code: 'E15', r: 0xF8, g: 0xC7, b: 0xC9 },
        { code: 'E16', r: 0xFF, g: 0xF3, b: 0xEB }, { code: 'E17', r: 0xFF, g: 0xE2, b: 0xEA },
        { code: 'E18', r: 0xFF, g: 0xC7, b: 0xDB }, { code: 'E19', r: 0xFE, g: 0xBA, b: 0xD5 },
        { code: 'E20', r: 0xD8, g: 0xC7, b: 0xD1 }, { code: 'E21', r: 0xBD, g: 0x9D, b: 0xA1 },
        { code: 'E22', r: 0xB7, g: 0x85, b: 0xA1 }, { code: 'E23', r: 0x93, g: 0x7A, b: 0x8D },
        { code: 'E24', r: 0xE1, g: 0xBC, b: 0xE8 }, { code: 'F1', r: 0xFD, g: 0x95, b: 0x7B },
        { code: 'F2', r: 0xFC, g: 0x3D, b: 0x46 }, { code: 'F3', r: 0xF7, g: 0x49, b: 0x41 },
        { code: 'F4', r: 0xFC, g: 0x28, b: 0x3C }, { code: 'F5', r: 0xE7, g: 0x00, b: 0x2F },
        { code: 'F6', r: 0x94, g: 0x36, b: 0x30 }, { code: 'F7', r: 0x97, g: 0x19, b: 0x37 },
        { code: 'F8', r: 0xBC, g: 0x00, b: 0x28 }, { code: 'F9', r: 0xE2, g: 0x67, b: 0x7A },
        { code: 'F10', r: 0x8A, g: 0x45, b: 0x26 }, { code: 'F11', r: 0x5A, g: 0x21, b: 0x21 },
        { code: 'F12', r: 0xFD, g: 0x4E, b: 0x6A }, { code: 'F13', r: 0xF3, g: 0x57, b: 0x44 },
        { code: 'F14', r: 0xFF, g: 0xA9, b: 0xAD }, { code: 'F15', r: 0xD3, g: 0x00, b: 0x22 },
        { code: 'F16', r: 0xFE, g: 0xC2, b: 0xA6 }, { code: 'F17', r: 0xE6, g: 0x9C, b: 0x79 },
        { code: 'F18', r: 0xD3, g: 0x7C, b: 0x46 }, { code: 'F19', r: 0xC1, g: 0x44, b: 0x4A },
        { code: 'F20', r: 0xCD, g: 0x93, b: 0x91 }, { code: 'F21', r: 0xF7, g: 0xB4, b: 0xC6 },
        { code: 'F22', r: 0xFD, g: 0xC0, b: 0xD0 }, { code: 'F23', r: 0xF6, g: 0x7E, b: 0x66 },
        { code: 'F24', r: 0xE6, g: 0x98, b: 0xAA }, { code: 'F25', r: 0xE5, g: 0x4B, b: 0x4F },
        { code: 'G1', r: 0xFF, g: 0xE2, b: 0xCE }, { code: 'G2', r: 0xFF, g: 0xC4, b: 0xAA },
        { code: 'G3', r: 0xF4, g: 0xC3, b: 0xA5 }, { code: 'G4', r: 0xE1, g: 0xB3, b: 0x83 },
        { code: 'G5', r: 0xED, g: 0xB0, b: 0x45 }, { code: 'G6', r: 0xE9, g: 0x9C, b: 0x17 },
        { code: 'G7', r: 0x9D, g: 0x5B, b: 0x3E }, { code: 'G8', r: 0x75, g: 0x38, b: 0x32 },
        { code: 'G9', r: 0xE6, g: 0xB4, b: 0x83 }, { code: 'G10', r: 0xD9, g: 0x8C, b: 0x39 },
        { code: 'G11', r: 0xE0, g: 0xC5, b: 0x93 }, { code: 'G12', r: 0xFF, g: 0xC8, b: 0x90 },
        { code: 'G13', r: 0xB7, g: 0x71, b: 0x4A }, { code: 'G14', r: 0x8D, g: 0x61, b: 0x4C },
        { code: 'G15', r: 0xFC, g: 0xF9, b: 0xE0 }, { code: 'G16', r: 0xF2, g: 0xD9, b: 0xBA },
        { code: 'G17', r: 0x78, g: 0x52, b: 0x4B }, { code: 'G18', r: 0xFF, g: 0xE4, b: 0xCC },
        { code: 'G19', r: 0xE0, g: 0x79, b: 0x35 }, { code: 'G20', r: 0xA9, g: 0x40, b: 0x23 },
        { code: 'G21', r: 0xB8, g: 0x85, b: 0x58 }, { code: 'H1', r: 0xFD, g: 0xFB, b: 0xFF },
        { code: 'H2', r: 0xFE, g: 0xFF, b: 0xFF }, { code: 'H3', r: 0xB6, g: 0xB1, b: 0xBA },
        { code: 'H4', r: 0x89, g: 0x85, b: 0x8C }, { code: 'H5', r: 0x48, g: 0x46, b: 0x4E },
        { code: 'H6', r: 0x2F, g: 0x2B, b: 0x2F }, { code: 'H7', r: 0x00, g: 0x00, b: 0x00 },
        { code: 'H8', r: 0xE7, g: 0xD6, b: 0xDB }, { code: 'H9', r: 0xED, g: 0xED, b: 0xED },
        { code: 'H10', r: 0xEE, g: 0xE9, b: 0xEA }, { code: 'H11', r: 0xCE, g: 0xCD, b: 0xD5 },
        { code: 'H12', r: 0xFF, g: 0xF5, b: 0xED }, { code: 'H13', r: 0xF5, g: 0xEC, b: 0xD2 },
        { code: 'H14', r: 0xCF, g: 0xD7, b: 0xD3 }, { code: 'H15', r: 0x98, g: 0xA6, b: 0xA8 },
        { code: 'H16', r: 0x1D, g: 0x14, b: 0x14 }, { code: 'H17', r: 0xF1, g: 0xED, b: 0xED },
        { code: 'H18', r: 0xFF, g: 0xFD, b: 0xF0 }, { code: 'H19', r: 0xF6, g: 0xEF, b: 0xE2 },
        { code: 'H20', r: 0x94, g: 0x9F, b: 0xA3 }, { code: 'H21', r: 0xFF, g: 0xFB, b: 0xE1 },
        { code: 'H22', r: 0xCA, g: 0xCA, b: 0xD4 }, { code: 'H23', r: 0x9A, g: 0x9D, b: 0x94 },
        { code: 'M1', r: 0xBC, g: 0xC6, b: 0xB8 }, { code: 'M2', r: 0x8A, g: 0xA3, b: 0x86 },
        { code: 'M3', r: 0x69, g: 0x7D, b: 0x80 }, { code: 'M4', r: 0xE3, g: 0xD2, b: 0xBC },
        { code: 'M5', r: 0xD0, g: 0xCC, b: 0xAA }, { code: 'M6', r: 0xB0, g: 0xA7, b: 0x82 },
        { code: 'M7', r: 0xB4, g: 0xA4, b: 0x97 }, { code: 'M8', r: 0xB3, g: 0x82, b: 0x81 },
        { code: 'M9', r: 0xA5, g: 0x87, b: 0x67 }, { code: 'M10', r: 0xC5, g: 0xB2, b: 0xBC },
        { code: 'M11', r: 0x9F, g: 0x75, b: 0x94 }, { code: 'M12', r: 0x64, g: 0x47, b: 0x49 },
        { code: 'M13', r: 0xD1, g: 0x90, b: 0x66 }, { code: 'M14', r: 0xC7, g: 0x73, b: 0x62 },
        { code: 'M15', r: 0x75, g: 0x7D, b: 0x78 }
    ];

    function rgb2lab(r, g, b) {
        let R = r / 255, G = g / 255, B = b / 255;
        R = R > 0.04045 ? Math.pow((R + 0.055) / 1.055, 2.4) : R / 12.92;
        G = G > 0.04045 ? Math.pow((G + 0.055) / 1.055, 2.4) : G / 12.92;
        B = B > 0.04045 ? Math.pow((B + 0.055) / 1.055, 2.4) : B / 12.92;
        const X = (R * 0.4124564 + G * 0.3575761 + B * 0.1804375) / 0.95047;
        const Y = R * 0.2126729 + G * 0.7151522 + B * 0.0721750;
        const Z = (R * 0.0193339 + G * 0.1191920 + B * 0.9503041) / 1.08883;
        const f = (t) => t > 0.008856 ? Math.pow(t, 1 / 3) : 7.787 * t + 16 / 116;
        return [116 * f(Y) - 16, 500 * (f(X) - f(Y)), 200 * (f(Y) - f(Z))];
    }

    function colorDistance(L1, a1, b1_, L2, a2, b2_) {
        const C1 = Math.sqrt(a1 * a1 + b1_ * b1_);
        const C2 = Math.sqrt(a2 * a2 + b2_ * b2_);
        const Cbar = (C1 + C2) / 2;
        const G = 0.5 * (1 - Math.sqrt(Math.pow(Cbar, 7) / (Math.pow(Cbar, 7) + Math.pow(25, 7))));
        const a1p = a1 * (1 + G);
        const a2p = a2 * (1 + G);
        const C1p = Math.sqrt(a1p * a1p + b1_ * b1_);
        const C2p = Math.sqrt(a2p * a2p + b2_ * b2_);
        const h1p = Math.atan2(b1_, a1p) * 180 / Math.PI + (b1_ >= 0 ? 0 : 360);
        const h2p = Math.atan2(b2_, a2p) * 180 / Math.PI + (b2_ >= 0 ? 0 : 360);
        const dL = L2 - L1;
        const dC = C2p - C1p;
        let dh = h2p - h1p;
        if (Math.abs(dh) > 180) dh = dh > 0 ? dh - 360 : dh + 360;
        const dH = 2 * Math.sqrt(C1p * C2p) * Math.sin(dh * Math.PI / 360);
        const Lbar = (L1 + L2) / 2;
        const Cbarp = (C1p + C2p) / 2;
        let hbarp = (h1p + h2p) / 2;
        if (Math.abs(h1p - h2p) > 180) hbarp = hbarp < 180 ? hbarp + 180 : hbarp - 180;
        const T = 1
            - 0.17 * Math.cos((hbarp - 30) * Math.PI / 180)
            + 0.24 * Math.cos((2 * hbarp) * Math.PI / 180)
            + 0.32 * Math.cos((3 * hbarp + 6) * Math.PI / 180)
            - 0.20 * Math.cos((4 * hbarp - 63) * Math.PI / 180);
        const SL = 1 + 0.015 * Math.pow(Lbar - 50, 2) / Math.sqrt(20 + Math.pow(Lbar - 50, 2));
        const SC = 1 + 0.045 * Cbarp;
        const SH = 1 + 0.015 * Cbarp * T;
        const RT = -2 * Math.sqrt(Math.pow(Cbarp, 7) / (Math.pow(Cbarp, 7) + Math.pow(25, 7)))
            * Math.sin((60 * Math.exp(-Math.pow((hbarp - 275) / 25, 2))) * Math.PI / 180);
        return Math.sqrt(
            Math.pow(dL / SL, 2)
            + Math.pow(dC / SC, 2)
            + Math.pow(dH / SH, 2)
            + RT * (dC / SC) * (dH / SH)
        );
    }

    PALETTE_211.forEach((c) => {
        const [L, A, B] = rgb2lab(c.r, c.g, c.b);
        c.L = L; c.A = A; c.B = B;
    });

    const palette_96_codes = [
        "A4", "A6", "A7", "A13", "A11", "A10", "A3", "A14",
        "B3", "B5", "B8", "B12", "B20", "B18", "B10", "B14", "B19", "B17", "B7",
        "C3", "C5", "C8", "C2", "C13", "C10", "C6", "C11", "C7", "C16",
        "D9", "D6", "D7", "D19", "D18", "D21", "D13", "D3", "D15", "D16", "D8", "D11", "D12", "D2", "D20", "D14", "D5",
        "E2", "E4", "E8", "E3", "E7", "E1", "E12", "E5", "E13", "E11", "E14", "E15", "E9", "E6", "E10",
        "F5", "F13", "F8", "F10", "F7", "F1", "F14", "F9", "F2", "F12", "F3", "F11", "F4", "F6",
        "G1", "G5", "G7", "G9", "G13", "G8", "G2", "G3", "G14", "G17",
        "H1", "H2", "H3", "H4", "H5", "H7", "H6",
        "M6", "M5", "M9", "M12"
    ];
    const PALETTE_96 = PALETTE_211.filter((p) => palette_96_codes.includes(p.code));

    const COLOR_MODES = [
        { mode: 'original', label: '原图' },
        { mode: '211', label: '211色' },
        { mode: '96', label: '96色' }
    ];

    const GRID_LINE_WIDTH_MAJOR = 0.1;
    const GRID_LINE_WIDTH_MINOR = 0.1;
    const GRID_BASE_MAJOR = 10;
    const GRID_BASE_MINOR = 5;

    const SETTINGS_KEY = 'pixelArtSettings';

    function getColorCacheKey(r, g, b) {
        return (Math.round(r / 2) << 12) | (Math.round(g / 2) << 6) | Math.round(b / 2);
    }

    function makeColorFinder() {
        const cache = new Map();
        return function findClosestColor(r, g, b, palette) {
            const key = getColorCacheKey(r, g, b);
            const cached = cache.get(key);
            if (cached) return cached;
            let minDist = Infinity;
            let closest = palette[0];
            const [L, A, B] = rgb2lab(r, g, b);
            for (const c of palette) {
                const d = colorDistance(L, A, B, c.L, c.A, c.B);
                if (d < minDist) {
                    minDist = d;
                    closest = c;
                }
            }
            cache.set(key, closest);
            return closest;
        };
    }

    function loadSettings() {
        try {
            const raw = localStorage.getItem(SETTINGS_KEY);
            if (!raw) return null;
            return JSON.parse(raw);
        } catch (e) {
            return null;
        }
    }

    function saveSettings(settings) {
        try {
            localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
        } catch (e) {
            // ignore
        }
    }

    function buildDefaultPixelArt() {
        const c = document.createElement('canvas');
        c.width = 50;
        c.height = 50;
        const d = c.getContext('2d');
        d.fillStyle = '#fff';
        d.fillRect(0, 0, 50, 50);
        const colors = ['#ff4444', '#4444ff', '#44ff44', '#ffff44', '#ff44ff', '#ff8800', '#00ffff', '#ff4488', '#88ff44', '#4488ff'];
        for (let row = 0; row < 5; row++) {
            for (let col = 0; col < 5; col++) {
                d.fillStyle = colors[(row * 5 + col) % 10];
                d.fillRect(col * 10, row * 10, 10, 10);
            }
        }
        d.fillStyle = '#000';
        d.fillRect(5, 25, 2, 2);
        d.fillRect(13, 25, 2, 2);
        d.fillRect(5, 33, 10, 2);
        d.fillRect(6, 34, 8, 2);
        return c.toDataURL('image/png');
    }

    const { createApp, ref, computed, onMounted, onBeforeUnmount } = Vue;

    createApp({
        setup() {
            const canvasRef = ref(null);
            const wrapperRef = ref(null);
            const fileInputRef = ref(null);
            const settingsPanelRef = ref(null);
            const settingsBtnRef = ref(null);

            const originalFileName = ref('pixel-art');

            const showGrid = ref(true);
            const showColorCode = ref(false);
            const colorMode = ref('original');
            const pixelScale = ref(1);

            const gridColor = ref('#b5a595');
            const bgColor = ref('#fefaf5');
            const settingsOpen = ref(false);
            const highlightCode = ref(null);
            const coordText = ref('— , —');
            const statsTotal = ref('—');

            const sortedStats = ref([]);

            const scale = ref(1);
            const offsetX = ref(0);
            const offsetY = ref(0);

            let currentImage = null;
            let imageWidth = 0;
            let imageHeight = 0;
            let displayImageCache = null;
            let displayWidth = 0;
            let displayHeight = 0;
            let displayColorCodeMap = null;
            let processedImageCache = null;
            let originalColorCodeMap = null;
            let ctx = null;
            let findClosestColor = makeColorFinder();

            const isDragging = ref(false);
            const isGrabbing = ref(false);
            let dragStartX = 0, dragStartY = 0, dragStartOffsetX = 0, dragStartOffsetY = 0;
            let touchDist = 0, touchStartScale = 1, touchStartOffsetX = 0, touchStartOffsetY = 0;
            let touchMidX = 0, touchMidY = 0;

            const currentPalette = computed(() => {
                if (colorMode.value === '211') return PALETTE_211;
                if (colorMode.value === '96') return PALETTE_96;
                return null;
            });

            const pixelScaleLabel = computed(() => {
                if (pixelScale.value >= 1) return `${pixelScale.value}x`;
                const denom = Math.round(1 / pixelScale.value);
                return `1/${denom}x`;
            });

            function initCanvas() {
                const canvas = canvasRef.value;
                const wrapper = wrapperRef.value;
                if (!canvas || !wrapper) return;
                canvas.width = wrapper.clientWidth;
                canvas.height = wrapper.clientHeight;
            }

            function getPalette() {
                if (colorMode.value === '211') return PALETTE_211;
                if (colorMode.value === '96') return PALETTE_96;
                return null;
            }

            function processImageWithPalette() {
                if (!currentImage) return Promise.resolve();
                const oc = document.createElement('canvas');
                oc.width = imageWidth;
                oc.height = imageHeight;
                const octx = oc.getContext('2d');
                octx.drawImage(currentImage, 0, 0);
                const idata = octx.getImageData(0, 0, imageWidth, imageHeight);
                const d = idata.data;
                originalColorCodeMap = [];

                return new Promise((resolve) => {
                    if (colorMode.value === 'original') {
                        processedImageCache = currentImage;
                        for (let i = 0; i < d.length; i += 4) originalColorCodeMap.push(null);
                        rebuildDisplayImage();
                        redrawCanvas();
                        resolve();
                        return;
                    }

                    const palette = getPalette();
                    for (let i = 0; i < d.length; i += 4) {
                        const r = d[i], g = d[i + 1], b = d[i + 2], a = d[i + 3];
                        if (a === 0) {
                            originalColorCodeMap.push(null);
                            continue;
                        }
                        const closest = findClosestColor(r, g, b, palette);
                        d[i] = closest.r;
                        d[i + 1] = closest.g;
                        d[i + 2] = closest.b;
                        originalColorCodeMap.push(closest.code);
                    }
                    octx.putImageData(idata, 0, 0);
                    processedImageCache = new Image();
                    processedImageCache.onload = () => {
                        rebuildDisplayImage();
                        redrawCanvas();
                        resolve();
                    };
                    processedImageCache.src = oc.toDataURL();
                });
            }

            function rebuildDisplayImage() {
                const srcImg = (colorMode.value === 'original') ? currentImage : processedImageCache;
                if (!srcImg) return;
                if (!srcImg.complete) {
                    srcImg.onload = () => {
                        rebuildDisplayImage();
                        redrawCanvas();
                    };
                    return;
                }

                if (pixelScale.value === 1) {
                    const dc = document.createElement('canvas');
                    dc.width = imageWidth;
                    dc.height = imageHeight;
                    const dctx = dc.getContext('2d');
                    dctx.drawImage(srcImg, 0, 0);
                    displayImageCache = dc;
                    displayWidth = imageWidth;
                    displayHeight = imageHeight;
                    displayColorCodeMap = [...originalColorCodeMap];
                    redrawCanvas();
                    return;
                }

                const sc = document.createElement('canvas');
                sc.width = imageWidth;
                sc.height = imageHeight;
                const sctx = sc.getContext('2d');
                sctx.drawImage(srcImg, 0, 0);
                const sd = sctx.getImageData(0, 0, imageWidth, imageHeight);

                if (pixelScale.value > 1) {
                    const ps = Math.round(pixelScale.value);
                    displayWidth = imageWidth * ps;
                    displayHeight = imageHeight * ps;
                    const dc = document.createElement('canvas');
                    dc.width = displayWidth;
                    dc.height = displayHeight;
                    const dctx = dc.getContext('2d');
                    dctx.imageSmoothingEnabled = false;
                    const dd = dctx.createImageData(displayWidth, displayHeight);
                    displayColorCodeMap = [];
                    for (let y = 0; y < imageHeight; y++) {
                        for (let dy = 0; dy < ps; dy++) {
                            for (let x = 0; x < imageWidth; x++) {
                                const si = (y * imageWidth + x) * 4;
                                const code = originalColorCodeMap[y * imageWidth + x];
                                for (let dx = 0; dx < ps; dx++) {
                                    const di = ((y * ps + dy) * displayWidth + (x * ps + dx)) * 4;
                                    dd.data[di] = sd.data[si];
                                    dd.data[di + 1] = sd.data[si + 1];
                                    dd.data[di + 2] = sd.data[si + 2];
                                    dd.data[di + 3] = sd.data[si + 3];
                                    displayColorCodeMap.push(code);
                                }
                            }
                        }
                    }
                    dctx.putImageData(dd, 0, 0);
                    displayImageCache = dc;
                    redrawCanvas();
                } else {
                    const ratio = Math.round(1 / pixelScale.value);
                    displayWidth = Math.ceil(imageWidth / ratio);
                    displayHeight = Math.ceil(imageHeight / ratio);
                    const dc = document.createElement('canvas');
                    dc.width = displayWidth;
                    dc.height = displayHeight;
                    const dctx = dc.getContext('2d');
                    dctx.imageSmoothingEnabled = false;
                    dctx.drawImage(sc, 0, 0, imageWidth, imageHeight, 0, 0, displayWidth, displayHeight);

                    const scaledData = dctx.getImageData(0, 0, displayWidth, displayHeight);
                    displayColorCodeMap = [];
                    const palette = getPalette();

                    for (let i = 0; i < scaledData.data.length; i += 4) {
                        const r = scaledData.data[i];
                        const g = scaledData.data[i + 1];
                        const b = scaledData.data[i + 2];
                        const a = scaledData.data[i + 3];
                        if (a > 0 && palette) {
                            const closest = findClosestColor(r, g, b, palette);
                            displayColorCodeMap.push(closest.code);
                            scaledData.data[i] = closest.r;
                            scaledData.data[i + 1] = closest.g;
                            scaledData.data[i + 2] = closest.b;
                        } else {
                            displayColorCodeMap.push(null);
                        }
                    }

                    dctx.putImageData(scaledData, 0, 0);
                    displayImageCache = dc;
                    redrawCanvas();
                }
            }

            function redrawCanvas() {
                if (!ctx) return;
                const canvas = canvasRef.value;
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.fillStyle = bgColor.value;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                if (!currentImage || !displayImageCache) return;

                ctx.save();
                ctx.translate(offsetX.value, offsetY.value);
                ctx.scale(scale.value, scale.value);
                ctx.imageSmoothingEnabled = false;

                const invScale = 1 / scale.value;
                const visibleX = Math.max(0, Math.floor(-offsetX.value * invScale));
                const visibleY = Math.max(0, Math.floor(-offsetY.value * invScale));
                const visibleW = Math.min(displayWidth - visibleX, Math.ceil(canvas.width * invScale) + 1);
                const visibleH = Math.min(displayHeight - visibleY, Math.ceil(canvas.height * invScale) + 1);

                ctx.drawImage(
                    displayImageCache,
                    visibleX, visibleY, visibleW, visibleH,
                    visibleX, visibleY, visibleW, visibleH
                );

                if (showGrid.value) drawGrid(visibleX, visibleY, visibleW, visibleH);
                if (showColorCode.value && colorMode.value !== 'original') {
                    drawColorCodes(visibleX, visibleY, visibleW, visibleH);
                }
                if (highlightCode.value && colorMode.value !== 'original') {
                    drawHighlightMask(visibleX, visibleY, visibleW, visibleH);
                }

                ctx.restore();
                updateStatsBar();
            }

            function drawGrid(vx, vy, vw, vh) {
                if (displayWidth === 0 || displayHeight === 0) return;
                const ms = GRID_BASE_MAJOR;
                const mis = GRID_BASE_MINOR;
                const ps = pixelScale.value >= 1 ? pixelScale.value : 1;

                const baseWidth = Math.max(displayWidth, displayHeight);
                const scaleFactor = Math.max(0.3, Math.min(1.5, baseWidth / 50));
                const lineWidthMajor = GRID_LINE_WIDTH_MAJOR * scaleFactor;
                const lineWidthMinor = GRID_LINE_WIDTH_MINOR * scaleFactor;
                const dashPattern = [scaleFactor, scaleFactor];

                const endX = vx + vw;
                const endY = vy + vh;

                ctx.strokeStyle = 'rgba(180,170,160,0.15)';
                ctx.lineWidth = 0.05 * scaleFactor;
                ctx.setLineDash([]);
                const xStart1 = Math.floor(vx / ps) * ps;
                for (let x = xStart1; x <= endX; x += ps) {
                    ctx.beginPath(); ctx.moveTo(x, vy); ctx.lineTo(x, endY); ctx.stroke();
                }
                const yStart1 = Math.floor(vy / ps) * ps;
                for (let y = yStart1; y <= endY; y += ps) {
                    ctx.beginPath(); ctx.moveTo(vx, y); ctx.lineTo(endX, y); ctx.stroke();
                }

                ctx.strokeStyle = gridColor.value;
                ctx.lineWidth = lineWidthMinor;
                ctx.setLineDash(dashPattern);
                const xStart2 = Math.ceil(vx / (ms * ps)) * ms * ps + mis * ps;
                for (let x = xStart2; x < endX; x += ms * ps) {
                    ctx.beginPath(); ctx.moveTo(x, vy); ctx.lineTo(x, endY); ctx.stroke();
                }
                const yStart2 = Math.ceil(vy / (ms * ps)) * ms * ps + mis * ps;
                for (let y = yStart2; y < endY; y += ms * ps) {
                    ctx.beginPath(); ctx.moveTo(vx, y); ctx.lineTo(endX, y); ctx.stroke();
                }

                ctx.strokeStyle = gridColor.value;
                ctx.lineWidth = lineWidthMajor;
                ctx.setLineDash([]);
                const xStart3 = Math.floor(vx / (ms * ps)) * ms * ps;
                for (let x = xStart3; x <= endX; x += ms * ps) {
                    ctx.beginPath(); ctx.moveTo(x, vy); ctx.lineTo(x, endY); ctx.stroke();
                }
                const yStart3 = Math.floor(vy / (ms * ps)) * ms * ps;
                for (let y = yStart3; y <= endY; y += ms * ps) {
                    ctx.beginPath(); ctx.moveTo(vx, y); ctx.lineTo(endX, y); ctx.stroke();
                }

                if (scale.value >= 16) {
                    const coordFontSize = 12 / scale.value;
                    ctx.font = `${coordFontSize}px Consolas, monospace`;

                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    for (let x = 0; x < displayWidth; x += ps) {
                        if (x >= vx && x <= endX) {
                            const text = `${x + 1}`;
                            const cx = x + ps / 2;
                            const cy = -ps / 2;
                            ctx.fillStyle = 'rgba(170,170,170,0.5)';
                            ctx.fillRect(x, -ps, ps, ps);
                            ctx.fillStyle = "#000";
                            ctx.fillText(text, cx, cy);
                        }
                    }
                    for (let x = 0; x < displayWidth; x += ps) {
                        if (x >= vx && x <= endX) {
                            const text = `${x + 1}`;
                            const cx = x + ps / 2;
                            const cy = displayHeight + ps / 2;
                            ctx.fillStyle = 'rgba(170,170,170,0.5)';
                            ctx.fillRect(x, displayHeight, ps, ps);
                            ctx.fillStyle = "#000";
                            ctx.fillText(text, cx, cy);
                        }
                    }
                    ctx.textAlign = 'center';
                    for (let y = 0; y < displayHeight; y += ps) {
                        if (y >= vy && y <= endY) {
                            const text = `${y + 1}`;
                            const cx = -ps / 2;
                            const cy = y + ps / 2;
                            ctx.fillStyle = 'rgba(170,170,170,0.5)';
                            ctx.fillRect(-ps, y, ps, ps);
                            ctx.fillStyle = "#000";
                            ctx.fillText(text, cx, cy);
                        }
                    }
                    for (let y = 0; y < displayHeight; y += ps) {
                        if (y >= vy && y <= endY) {
                            const text = `${y + 1}`;
                            const cx = displayWidth + ps / 2;
                            const cy = y + ps / 2;
                            ctx.fillStyle = 'rgba(170,170,170,0.5)';
                            ctx.fillRect(displayWidth, y, ps, ps);
                            ctx.fillStyle = "#000";
                            ctx.fillText(text, cx, cy);
                        }
                    }
                }
            }

            function drawColorCodes(vx, vy, vw, vh) {
                if (!displayColorCodeMap || displayColorCodeMap.length === 0) return;
                const fontSize = Math.max(7 / scale.value, 0.5);
                ctx.save();
                ctx.font = `${fontSize}px Consolas, monospace`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                const palette = currentPalette.value;
                if (!palette) { ctx.restore(); return; }

                const endX = vx + vw;
                const endY = vy + vh;

                for (let y = vy; y < endY; y++) {
                    for (let x = vx; x < endX; x++) {
                        const code = displayColorCodeMap[y * displayWidth + x];
                        if (!code) continue;
                        const ci = palette.find((c) => c.code === code);
                        ctx.fillStyle = '#000';
                        if (ci) {
                            const br = (ci.r * 299 + ci.g * 587 + ci.b * 114) / 1000;
                            ctx.fillStyle = br < 128 ? '#fff' : '#000';
                        }
                        ctx.fillText(code, x + 0.5, y + 0.5);
                    }
                }
                ctx.restore();
            }

            function increasePixelScale() {
                if (pixelScale.value < 1) {
                    pixelScale.value = 1 / Math.max(1, Math.round(1 / pixelScale.value) - 1);
                } else {
                    pixelScale.value = Math.min(10, pixelScale.value + 1);
                }
                rebuildDisplayImage();
                resetView();
            }

            function decreasePixelScale() {
                if (pixelScale.value > 1) {
                    pixelScale.value = Math.max(1, pixelScale.value - 1);
                } else {
                    pixelScale.value = 1 / (Math.round(1 / pixelScale.value) + 1);
                }
                rebuildDisplayImage();
                resetView();
            }

            async function setColorMode(mode) {
                highlightCode.value = null;
                colorMode.value = mode;
                processedImageCache = null;
                await processImageWithPalette();
            }

            function loadImageFromDataUrl(dataUrl, fallbackName) {
                const img = new Image();
                img.onload = () => {
                    currentImage = img;
                    imageWidth = img.naturalWidth;
                    imageHeight = img.naturalHeight;
                    pixelScale.value = 1;
                    processImageWithPalette();
                    resetView();
                };
                img.onerror = () => alert('无法加载图片');
                img.src = dataUrl;
                if (fallbackName !== undefined) originalFileName.value = fallbackName;
            }

            function loadImageFromFile(file) {
                if (!file) return;
                findClosestColor = makeColorFinder();
                originalFileName.value = file.name.replace(/\.[^/.]+$/, '');
                const reader = new FileReader();
                reader.onload = (e) => loadImageFromDataUrl(e.target.result);
                reader.readAsDataURL(file);
            }

            function resetView() {
                if (!currentImage) return;
                initCanvas();
                const wrapper = wrapperRef.value;
                const ww = wrapper.clientWidth, wh = wrapper.clientHeight;
                const sx = (ww * 0.9) / displayWidth;
                const sy = (wh * 0.9) / displayHeight;
                let s = Math.min(sx, sy, 50);
                s = Math.max(0.1, s);
                scale.value = s;
                offsetX.value = (ww - displayWidth * s) / 2;
                offsetY.value = (wh - displayHeight * s) / 2;
                redrawCanvas();
            }

            function toggleMirror() {
                if (!displayImageCache || !displayColorCodeMap) {
                    redrawCanvas();
                    return;
                }
                const mirroredCanvas = document.createElement('canvas');
                mirroredCanvas.width = displayWidth;
                mirroredCanvas.height = displayHeight;
                const mctx = mirroredCanvas.getContext('2d');
                mctx.imageSmoothingEnabled = false;
                mctx.translate(displayWidth, 0);
                mctx.scale(-1, 1);
                mctx.drawImage(displayImageCache, 0, 0);

                const mirroredCodes = [];
                for (let y = 0; y < displayHeight; y++) {
                    for (let x = displayWidth - 1; x >= 0; x--) {
                        mirroredCodes.push(displayColorCodeMap[y * displayWidth + x]);
                    }
                }

                displayImageCache = mirroredCanvas;
                displayColorCodeMap = mirroredCodes;
                redrawCanvas();
            }

            async function toggleColorCode(show) {
                if (colorMode.value === 'original') {
                    await setColorMode('211');
                }
                showColorCode.value = typeof show === 'boolean' ? show : !showColorCode.value;
                saveSettings({ bgColor: bgColor.value, gridColor: gridColor.value, showGrid: showGrid.value });
                if (showColorCode.value && scale.value < 16) {
                    const canvas = canvasRef.value;
                    scale.value = 16;
                    offsetX.value = (canvas.width - displayWidth * scale.value) / 2;
                    offsetY.value = (canvas.height - displayHeight * scale.value) / 2;
                }
                redrawCanvas();
            }

            async function exportImage() {
                await toggleColorCode(true);
                if (!currentImage || !displayImageCache) return;
                const artworkName = prompt('请输入作品名称：', originalFileName.value || 'pixel-art');
                if (artworkName === null) return;

                let totalCount = 0, colorKind = 0;
                const colorCount = {};
                if (displayColorCodeMap) {
                    for (const code of displayColorCodeMap) {
                        if (code) {
                            colorCount[code] = (colorCount[code] || 0) + 1;
                            totalCount++;
                        }
                    }
                    colorKind = Object.keys(colorCount).length;
                }

                const MIN_PIXEL_SIZE = 40;
                const ps = pixelScale.value >= 1 ? pixelScale.value : 1;
                const effectivePixelSize = ps * MIN_PIXEL_SIZE;
                const COORD_BORDER = MIN_PIXEL_SIZE * ps;

                const imgExportWidth = displayWidth * effectivePixelSize;
                const imgExportHeight = displayHeight * effectivePixelSize;

                const BASE_SCALE = imgExportWidth / 800;
                const TITLE_SCALE = Math.max(1, BASE_SCALE);
                const STAT_SCALE = Math.max(1, BASE_SCALE);
                const headerHeight = Math.round(50 * TITLE_SCALE);

                const palette = currentPalette.value;
                const sorted = Object.entries(colorCount).sort((a, b) => b[1] - a[1]);
                const tagHeight = Math.round(18 * STAT_SCALE);
                const lineHeight = Math.round(22 * STAT_SCALE);
                const gap = Math.round(6 * STAT_SCALE);
                const fontSize = Math.round(14 * STAT_SCALE);

                let tempX = 15 * STAT_SCALE, rowCount = 1;
                for (const [code, count] of sorted) {
                    const countText = `${count}`;
                    const tempFont = `bold ${fontSize}px Consolas, monospace`;
                    const ex2 = document.createElement('canvas').getContext('2d');
                    ex2.font = tempFont;
                    const codeWidth = ex2.measureText(code).width + 10 * STAT_SCALE;
                    const countWidth = ex2.measureText(countText).width + 10 * STAT_SCALE;
                    const tagWidth = codeWidth + countWidth;
                    if (tempX + tagWidth > imgExportWidth - 20 * STAT_SCALE) {
                        tempX = 15 * STAT_SCALE;
                        rowCount++;
                    }
                    tempX += tagWidth + gap;
                }
                const footerHeight = rowCount * lineHeight + 10 * STAT_SCALE;

                const exportWidth = imgExportWidth + COORD_BORDER * 2;
                const exportHeight = imgExportHeight + headerHeight + footerHeight + COORD_BORDER * 2;

                const MAX_CANVAS_SIZE = 16384;
                let finalExportWidth = exportWidth;
                let finalExportHeight = exportHeight;
                let exportScaleDown = 1;

                if (exportWidth > MAX_CANVAS_SIZE || exportHeight > MAX_CANVAS_SIZE) {
                    exportScaleDown = MAX_CANVAS_SIZE / Math.max(exportWidth, exportHeight);
                    finalExportWidth = Math.round(exportWidth * exportScaleDown);
                    finalExportHeight = Math.round(exportHeight * exportScaleDown);
                }

                const ec = document.createElement('canvas');
                ec.width = finalExportWidth;
                ec.height = finalExportHeight;
                const ex = ec.getContext('2d');

                if (exportScaleDown < 1) {
                    ex.scale(exportScaleDown, exportScaleDown);
                    ex.imageSmoothingEnabled = true;
                } else {
                    ex.imageSmoothingEnabled = false;
                }

                ex.fillStyle = bgColor.value;
                ex.fillRect(0, 0, exportWidth, exportHeight);
                ex.imageSmoothingEnabled = false;

                ex.fillStyle = '#5e4b3c';
                const titleFontSize = Math.round(18 * TITLE_SCALE);
                ex.font = `bold ${titleFontSize}px "Segoe UI", sans-serif`;
                ex.textAlign = 'left';
                ex.textBaseline = 'middle';
                ex.fillText(`${artworkName}  [${displayWidth}×${displayHeight} / ${colorKind}色 / 共${totalCount}颗]`, 15 * TITLE_SCALE, headerHeight / 2);

                ex.save();
                ex.translate(COORD_BORDER, headerHeight + COORD_BORDER);
                ex.scale(effectivePixelSize / ps, effectivePixelSize / ps);
                ex.drawImage(displayImageCache, 0, 0);

                if (showGrid.value) {
                    const ms = GRID_BASE_MAJOR, mis = GRID_BASE_MINOR, gridPs = ps;
                    ex.strokeStyle = 'rgba(180,170,160,0.1)'; ex.lineWidth = 0.1; ex.setLineDash([]);
                    for (let x = 0; x <= displayWidth; x += gridPs) { ex.beginPath(); ex.moveTo(x, 0); ex.lineTo(x, displayHeight); ex.stroke(); }
                    for (let y = 0; y <= displayHeight; y += gridPs) { ex.beginPath(); ex.moveTo(0, y); ex.lineTo(displayWidth, y); ex.stroke(); }
                    ex.strokeStyle = gridColor.value; ex.lineWidth = 0.1; ex.setLineDash([0.5, 0.5]);
                    for (let x = mis * gridPs; x < displayWidth; x += ms * gridPs) { ex.beginPath(); ex.moveTo(x, 0); ex.lineTo(x, displayHeight); ex.stroke(); }
                    for (let y = mis * gridPs; y < displayHeight; y += ms * gridPs) { ex.beginPath(); ex.moveTo(0, y); ex.lineTo(displayWidth, y); ex.stroke(); }
                    ex.strokeStyle = gridColor.value; ex.lineWidth = 0.1; ex.setLineDash([]);
                    for (let x = 0; x <= displayWidth; x += ms * gridPs) { ex.beginPath(); ex.moveTo(x, 0); ex.lineTo(x, displayHeight); ex.stroke(); }
                    for (let y = 0; y <= displayHeight; y += ms * gridPs) { ex.beginPath(); ex.moveTo(0, y); ex.lineTo(displayWidth, y); ex.stroke(); }
                }

                if (displayColorCodeMap && palette) {
                    ex.font = '0.5px Consolas, monospace';
                    ex.textAlign = 'center';
                    ex.textBaseline = 'middle';
                    for (let y = 0; y < displayHeight; y++) {
                        for (let x = 0; x < displayWidth; x++) {
                            const code = displayColorCodeMap[y * displayWidth + x];
                            if (!code) continue;
                            const ci = palette.find((c) => c.code === code);
                            ex.fillStyle = '#000';
                            if (ci) {
                                const br = (ci.r * 299 + ci.g * 587 + ci.b * 114) / 1000;
                                ex.fillStyle = br < 128 ? '#fff' : '#000';
                            }
                            ex.fillText(code, x + 0.5, y + 0.5);
                        }
                    }
                }
                ex.restore();

                ex.font = `${0.5 * effectivePixelSize / ps}px Consolas, monospace`;
                ex.textAlign = 'center';
                ex.textBaseline = 'middle';
                for (let x = 0; x < displayWidth; x += ps) {
                    const sx = COORD_BORDER + x * effectivePixelSize + effectivePixelSize / 2;
                    const sy = headerHeight + COORD_BORDER / 2;
                    ex.fillStyle = '#aaa';
                    ex.fillRect(sx - effectivePixelSize / 2, headerHeight, effectivePixelSize, COORD_BORDER);
                    ex.fillStyle = '#000';
                    ex.fillText(`${x + 1}`, sx, sy);
                }
                for (let x = 0; x < displayWidth; x += ps) {
                    const sx = COORD_BORDER + x * effectivePixelSize + effectivePixelSize / 2;
                    const sy = headerHeight + imgExportHeight + COORD_BORDER + COORD_BORDER / 2;
                    ex.fillStyle = '#aaa';
                    ex.fillRect(sx - effectivePixelSize / 2, headerHeight + imgExportHeight + COORD_BORDER, effectivePixelSize, COORD_BORDER);
                    ex.fillStyle = '#000';
                    ex.fillText(`${x + 1}`, sx, sy);
                }
                for (let y = 0; y < displayHeight; y += ps) {
                    const sx = COORD_BORDER / 2;
                    const sy = headerHeight + COORD_BORDER + y * effectivePixelSize + effectivePixelSize / 2;
                    ex.fillStyle = '#aaa';
                    ex.fillRect(0, sy - effectivePixelSize / 2, COORD_BORDER, effectivePixelSize);
                    ex.fillStyle = '#000';
                    ex.fillText(`${y + 1}`, sx, sy);
                }
                for (let y = 0; y < displayHeight; y += ps) {
                    const sx = COORD_BORDER + imgExportWidth + COORD_BORDER / 2;
                    const sy = headerHeight + COORD_BORDER + y * effectivePixelSize + effectivePixelSize / 2;
                    ex.fillStyle = '#aaa';
                    ex.fillRect(COORD_BORDER + imgExportWidth, sy - effectivePixelSize / 2, COORD_BORDER, effectivePixelSize);
                    ex.fillStyle = '#000';
                    ex.fillText(`${y + 1}`, sx, sy);
                }

                if (displayColorCodeMap && palette) {
                    const footerY = headerHeight + COORD_BORDER * 2 + imgExportHeight;
                    let tagX = 15 * STAT_SCALE, tagY = footerY + 5 * STAT_SCALE;

                    for (const [code, count] of sorted) {
                        const ci = palette.find((c) => c.code === code);
                        const colorHex = ci
                            ? `#${ci.r.toString(16).padStart(2, '0')}${ci.g.toString(16).padStart(2, '0')}${ci.b.toString(16).padStart(2, '0')}`
                            : '#ccc';
                        const countText = `${count}`;

                        ex.font = `bold ${fontSize}px Consolas, monospace`;
                        const codeWidth = ex.measureText(code).width + 10 * STAT_SCALE;
                        const countWidth = ex.measureText(countText).width + 10 * STAT_SCALE;
                        const tagWidth = codeWidth + countWidth;

                        if (tagX + tagWidth > exportWidth - 20 * STAT_SCALE) {
                            tagX = 15 * STAT_SCALE;
                            tagY += lineHeight;
                        }

                        ex.fillStyle = bgColor.value;
                        ex.strokeStyle = '#ccc';
                        ex.lineWidth = 1 * STAT_SCALE;
                        ex.fillRect(tagX, tagY, tagWidth, tagHeight);
                        ex.strokeRect(tagX, tagY, tagWidth, tagHeight);

                        ex.fillStyle = colorHex;
                        ex.fillRect(tagX, tagY, codeWidth, tagHeight);

                        const br = ci ? (ci.r * 299 + ci.g * 587 + ci.b * 114) / 1000 : 255;
                        ex.fillStyle = br < 128 ? '#fff' : '#000';
                        ex.textBaseline = 'middle';
                        ex.textAlign = 'center';
                        ex.fillText(code, tagX + codeWidth / 2, tagY + tagHeight / 2);

                        ex.fillStyle = '#333';
                        ex.fillText(countText, tagX + codeWidth + countWidth / 2, tagY + tagHeight / 2);

                        tagX += tagWidth + gap;
                    }
                }

                ec.toBlob((blob) => {
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = `${artworkName}.png`;
                    a.click();
                    URL.revokeObjectURL(url);
                });
            }

            function handleMouseDown(e) {
                if (!currentImage) return;
                isDragging.value = true;
                isGrabbing.value = true;
                dragStartX = e.clientX;
                dragStartY = e.clientY;
                dragStartOffsetX = offsetX.value;
                dragStartOffsetY = offsetY.value;
                e.preventDefault();
            }

            function handleMouseMove(e) {
                if (!currentImage) return;
                if (isDragging.value) {
                    offsetX.value = dragStartOffsetX + (e.clientX - dragStartX);
                    offsetY.value = dragStartOffsetY + (e.clientY - dragStartY);
                    redrawCanvas();
                }
                updateCoordinateDisplay(e);
            }

            function handleMouseUp() {
                isDragging.value = false;
                isGrabbing.value = false;
            }

            function handleMouseLeave() {
                isDragging.value = false;
                isGrabbing.value = false;
                coordText.value = '— , —';
            }

            function handleWheel(e) {
                if (!currentImage) return;
                e.preventDefault();
                const canvas = canvasRef.value;
                const rect = canvas.getBoundingClientRect();
                const mx = e.clientX - rect.left;
                const my = e.clientY - rect.top;
                const os = scale.value;
                const newScale = e.deltaY < 0 ? Math.min(50, scale.value * 1.1) : Math.max(0.1, scale.value / 1.1);
                scale.value = newScale;
                offsetX.value = mx - (mx - offsetX.value) * (newScale / os);
                offsetY.value = my - (my - offsetY.value) * (newScale / os);
                redrawCanvas();
            }

            function updateCoordinateDisplay(e) {
                if (!currentImage) {
                    coordText.value = '— , —';
                    return;
                }
                const canvas = canvasRef.value;
                const rect = canvas.getBoundingClientRect();
                const ix = (e.clientX - rect.left - offsetX.value) / scale.value;
                const iy = (e.clientY - rect.top - offsetY.value) / scale.value;
                const col = Math.floor(ix);
                const row = Math.floor(iy);
                if (col >= 0 && col < displayWidth && row >= 0 && row < displayHeight) {
                    const idx = row * displayWidth + col;
                    const code = displayColorCodeMap ? displayColorCodeMap[idx] : null;
                    coordText.value = code ? `${col},${row} #${code}` : `${col},${row}`;
                } else {
                    coordText.value = '— , —';
                }
            }

            function updateStatsBar() {
                if (!displayColorCodeMap || displayColorCodeMap.length === 0 || colorMode.value === 'original') {
                    statsTotal.value = '—';
                    sortedStats.value = [];
                    return;
                }
                const colorCount = {};
                let total = 0;
                for (const code of displayColorCodeMap) {
                    if (code) {
                        colorCount[code] = (colorCount[code] || 0) + 1;
                        total++;
                    }
                }
                const palette = currentPalette.value;
                const sorted = Object.entries(colorCount)
                    .sort((a, b) => b[1] - a[1])
                    .map(([code, count]) => {
                        const ci = palette ? palette.find((c) => c.code === code) : null;
                        const colorHex = ci
                            ? `#${ci.r.toString(16).padStart(2, '0')}${ci.g.toString(16).padStart(2, '0')}${ci.b.toString(16).padStart(2, '0')}`
                            : '#ccc';
                        return { code, count, colorHex };
                    });
                statsTotal.value = `共 ${total} 珠 · ${sorted.length} 色`;
                sortedStats.value = sorted;
            }

            function onTagClick(code) {
                if (highlightCode.value === code) {
                    highlightCode.value = null;
                } else {
                    highlightCode.value = code;
                    if (!showColorCode.value) {
                        showColorCode.value = true;
                        saveSettings({ bgColor: bgColor.value, gridColor: gridColor.value, showGrid: showGrid.value });
                        if (scale.value < 16) {
                            const canvas = canvasRef.value;
                            scale.value = 16;
                            offsetX.value = (canvas.width - displayWidth * scale.value) / 2;
                            offsetY.value = (canvas.height - displayHeight * scale.value) / 2;
                        }
                    }
                }
                redrawCanvas();
            }

            function drawHighlightMask(vx, vy, vw, vh) {
                if (!displayColorCodeMap || displayColorCodeMap.length === 0) return;
                const target = highlightCode.value;
                if (!target) return;

                ctx.save();
                ctx.setTransform(1, 0, 0, 1, 0, 0);
                ctx.translate(offsetX.value, offsetY.value);
                ctx.scale(scale.value, scale.value);

                const endX = vx + vw;
                const endY = vy + vh;

                for (let y = vy; y < endY; y++) {
                    for (let x = vx; x < endX; x++) {
                        const code = displayColorCodeMap[y * displayWidth + x];
                        if (code === target || !code) continue;
                        ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
                        ctx.fillRect(x, y, 1, 1);
                    }
                }

                ctx.strokeStyle = '#FFD700';
                ctx.lineWidth = 1.5 / scale.value;
                ctx.setLineDash([]);

                for (let y = vy; y < endY; y++) {
                    for (let x = vx; x < endX; x++) {
                        if (displayColorCodeMap[y * displayWidth + x] !== target) continue;
                        const top = y > 0 && displayColorCodeMap[(y - 1) * displayWidth + x] === target;
                        const bottom = y < displayHeight - 1 && displayColorCodeMap[(y + 1) * displayWidth + x] === target;
                        const left = x > 0 && displayColorCodeMap[y * displayWidth + (x - 1)] === target;
                        const right = x < displayWidth - 1 && displayColorCodeMap[y * displayWidth + (x + 1)] === target;

                        if (!top) { ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + 1, y); ctx.stroke(); }
                        if (!bottom) { ctx.beginPath(); ctx.moveTo(x, y + 1); ctx.lineTo(x + 1, y + 1); ctx.stroke(); }
                        if (!left) { ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, y + 1); ctx.stroke(); }
                        if (!right) { ctx.beginPath(); ctx.moveTo(x + 1, y); ctx.lineTo(x + 1, y + 1); ctx.stroke(); }
                    }
                }

                ctx.restore();
            }

            function toggleGrid() {
                showGrid.value = !showGrid.value;
                redrawCanvas();
                saveSettings({ bgColor: bgColor.value, gridColor: gridColor.value, showGrid: showGrid.value });
            }

            function onBgColorInput(e) {
                bgColor.value = e.target.value;
                redrawCanvas();
                saveSettings({ bgColor: bgColor.value, gridColor: gridColor.value, showGrid: showGrid.value });
            }

            function onGridColorInput(e) {
                gridColor.value = e.target.value;
                redrawCanvas();
                saveSettings({ bgColor: bgColor.value, gridColor: gridColor.value, showGrid: showGrid.value });
            }

            function onFileChange(e) {
                const file = e.target.files && e.target.files[0];
                if (file) loadImageFromFile(file);
                e.target.value = '';
            }

            function onSettingsToggle() {
                settingsOpen.value = !settingsOpen.value;
            }

            function onWindowClick(e) {
                if (!settingsOpen.value) return;
                if (settingsPanelRef.value && !settingsPanelRef.value.contains(e.target)
                    && settingsBtnRef.value && !settingsBtnRef.value.contains(e.target)) {
                    settingsOpen.value = false;
                }
            }

            function handleResize() {
                if (!currentImage) {
                    initCanvas();
                    return;
                }
                const canvas = canvasRef.value;
                const ocx = canvas.width / 2, ocy = canvas.height / 2;
                initCanvas();
                offsetX.value += canvas.width / 2 - ocx;
                offsetY.value += canvas.height / 2 - ocy;
                redrawCanvas();
            }

            function onTouchStart(e) {
                if (!currentImage) return;
                e.preventDefault();
                if (e.touches.length === 1) {
                    isDragging.value = true;
                    isGrabbing.value = true;
                    dragStartX = e.touches[0].clientX;
                    dragStartY = e.touches[0].clientY;
                    dragStartOffsetX = offsetX.value;
                    dragStartOffsetY = offsetY.value;
                } else if (e.touches.length === 2) {
                    isDragging.value = false;
                    const dx = e.touches[0].clientX - e.touches[1].clientX;
                    const dy = e.touches[0].clientY - e.touches[1].clientY;
                    touchDist = Math.hypot(dx, dy);
                    touchStartScale = scale.value;
                    touchStartOffsetX = offsetX.value;
                    touchStartOffsetY = offsetY.value;
                    const canvas = canvasRef.value;
                    const rect = canvas.getBoundingClientRect();
                    touchMidX = (e.touches[0].clientX + e.touches[1].clientX) / 2 - rect.left;
                    touchMidY = (e.touches[0].clientY + e.touches[1].clientY) / 2 - rect.top;
                }
            }

            function onTouchMove(e) {
                if (!currentImage) return;
                e.preventDefault();
                if (e.touches.length === 1 && isDragging.value) {
                    offsetX.value = dragStartOffsetX + (e.touches[0].clientX - dragStartX);
                    offsetY.value = dragStartOffsetY + (e.touches[0].clientY - dragStartY);
                    redrawCanvas();
                } else if (e.touches.length === 2) {
                    const dx = e.touches[0].clientX - e.touches[1].clientX;
                    const dy = e.touches[0].clientY - e.touches[1].clientY;
                    const d = Math.hypot(dx, dy);
                    const ns = Math.max(0.1, Math.min(50, touchStartScale * (d / touchDist)));
                    offsetX.value = touchMidX - (touchMidX - touchStartOffsetX) * (ns / touchStartScale);
                    offsetY.value = touchMidY - (touchMidY - touchStartOffsetY) * (ns / touchStartScale);
                    scale.value = ns;
                    redrawCanvas();
                }
            }

            function onTouchEnd() {
                isDragging.value = false;
                isGrabbing.value = false;
            }

            onMounted(() => {
                ctx = canvasRef.value.getContext('2d');
                const saved = loadSettings();
                if (saved) {
                    if (saved.bgColor) bgColor.value = saved.bgColor;
                    if (saved.gridColor) gridColor.value = saved.gridColor;
                    if (typeof saved.showGrid === 'boolean') showGrid.value = saved.showGrid;
                }
                initCanvas();
                loadImageFromDataUrl(buildDefaultPixelArt(), 'pixel-art');
                window.addEventListener('mousemove', handleMouseMove);
                window.addEventListener('mouseup', handleMouseUp);
                window.addEventListener('resize', handleResize);
                window.addEventListener('click', onWindowClick);
            });

            onBeforeUnmount(() => {
                window.removeEventListener('mousemove', handleMouseMove);
                window.removeEventListener('mouseup', handleMouseUp);
                window.removeEventListener('resize', handleResize);
                window.removeEventListener('click', onWindowClick);
            });

            return {
                canvasRef,
                wrapperRef,
                fileInputRef,
                settingsPanelRef,
                settingsBtnRef,
                COLOR_MODES,
                colorMode,
                showGrid,
                showColorCode,
                pixelScaleLabel,
                gridColor,
                bgColor,
                settingsOpen,
                coordText,
                statsTotal,
                sortedStats,
                highlightCode,
                isGrabbing,
                onColorModeClick: setColorMode,
                onToggleGrid: toggleGrid,
                onToggleColorCode: () => toggleColorCode(),
                onIncreasePixelScale: increasePixelScale,
                onDecreasePixelScale: decreasePixelScale,
                onMirror: toggleMirror,
                onExport: exportImage,
                onFileChange,
                onBgColorInput,
                onGridColorInput,
                onSettingsToggle,
                onTagClick,
                onCanvasMouseDown: handleMouseDown,
                onCanvasMouseLeave: handleMouseLeave,
                onCanvasWheel: handleWheel,
                onCanvasTouchStart: onTouchStart,
                onCanvasTouchMove: onTouchMove,
                onCanvasTouchEnd: onTouchEnd
            };
        }
    }).mount('#app');
})();
