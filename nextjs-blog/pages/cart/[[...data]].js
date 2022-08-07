import Link from "next/link";
import { useRouter } from "next/router";

const CartSlug = () => {
    const router = useRouter()
    const { data } = router.query

    return (
        <>
            <h1>CartSlug {JSON.stringify(data)}</h1>
            <Link href="/cart/2022/08/07">
                <a>2022년 8월 7일로</a>
            </Link>
            <button onClick={() => router.push('/cart/2022/08/10')}>2022년 8월 10일로</button>
        </>
    )
}

export default CartSlug;