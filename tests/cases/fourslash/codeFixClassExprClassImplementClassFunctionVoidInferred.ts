/// <reference path='fourslash.ts' />

////class A {
////    f() {}
////}
////let B = class implements A {}

verify.codeFix({
    description: "Implement interface 'A'",
    // TODO: GH#18795
    newFileContent:
`class A {
    f() {}
}
let B = class implements A {\r
    f(): void {\r
        throw new Error("Method not implemented.");\r
    }\r
}`
});
