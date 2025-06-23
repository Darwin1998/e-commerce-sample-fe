export default function Testimonials() {
    return (
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-2xl font-bold mb-10 text-center text-gray-800 dark:text-white">
                    What Our Customers Say
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Testimonial 1 */}
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            "Super fast shipping and great quality products. I'm definitely coming back!"
                        </p>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                            — Anna L., Cebu City
                        </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            "Customer service was very responsive. They helped me change my order with no hassle."
                        </p>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                            — Jerome M., Quezon City
                        </div>
                    </div>

                    {/* Testimonial 3 */}
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            "I was hesitant at first, but the product quality exceeded my expectations."
                        </p>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                            — Carla R., Davao
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}