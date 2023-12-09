export function load({ params }: { params: { nation: string } }) {
    return {
        nation: params.nation
    };
}