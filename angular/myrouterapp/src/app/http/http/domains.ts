interface RootObject {
    pc: Pc;
    ps3: Pc;
    xbox: Pc;
    xone: Pc;
    ps4: Pc;
}

interface Pc {
    label: string;
    count: number;
    peak24: number;
}