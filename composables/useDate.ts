export default function useDate() {
    const today = (): Date => {
        return new Date()
    }

    return {today}
}