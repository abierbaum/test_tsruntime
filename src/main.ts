import { Reflective, Types, getType } from 'tsruntime';

@Reflective
export class StatsModel {
    a?: number
    b: string
    c: Array<string>
    d: number | string | null
}

@Reflective
class Foo extends Array<string> {

}


console.log('========= Types =============');

const clsType = getType(Foo)
console.log('cls: ', Types.TypeKind[clsType.kind]);

const dType = getType(StatsModel.prototype, "d")
console.log('dType: ', Types.TypeKind[dType.kind]);

console.log('Done');
