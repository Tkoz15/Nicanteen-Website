import { Target, Users, Lightbulb } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            About Nicanteen
          </h2>
          <p className="text-lg text-muted-foreground">
            Born from a simple idea: pouch users deserve better than plastic bags and tins.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20">
              <Lightbulb className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Innovation</h3>
            <p className="text-muted-foreground">
              Designed from the ground up to solve real problems for pouch users.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20">
              <Users className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Community</h3>
            <p className="text-muted-foreground">
              Built by pouch users, for pouch users. We understand your needs.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20">
              <Target className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Purpose</h3>
            <p className="text-muted-foreground">
              Making your daily carry more convenient, discreet, and stylish.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-2xl text-center">
          <p className="text-muted-foreground">
            Nicanteen isn&apos;t just a product – it&apos;s a solution. We noticed that nicotine pouch users were stuck
            with inconvenient storage options that didn&apos;t fit well in pockets or looked unprofessional.
            That&apos;s why we created Nicanteen: a sleek, pocket-friendly carrier that keeps your pouches fresh
            and accessible while maintaining a discreet profile.
          </p>
        </div>
      </div>
    </section>
  );
}