function cn(...classes: (string | undefined | null | false | Record<string, boolean>)[]): string {
    return classes
        .flatMap((cls) =>
            typeof cls === 'object' && cls !== null
                ? Object.keys(cls).filter((key) => cls[key])
                : cls
        )
        .filter(Boolean)
        .join(' ');
}

export default cn;
