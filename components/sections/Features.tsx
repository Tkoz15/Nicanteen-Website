import { Shield, Palette, Pocket, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Pocket,
    title: "Pocket-Perfect Design",
    description: "Slim profile that fits seamlessly in any pocket without bulging or discomfort."
  },
  {
    icon: Shield,
    title: "Durable Protection",
    description: "High-quality plastic construction keeps your pouches safe and fresh."
  },
  {
    icon: Palette,
    title: "Multiple Colors",
    description: "Choose from various colors to match your style and preference."
  },
  {
    icon: Sparkles,
    title: "Discreet & Stylish",
    description: "Sleek design that looks great while keeping your pouches private."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Why Choose <span className="text-brand-green">Nicanteen</span>?
          </h2>
          <p className="text-lg text-muted-foreground">
            Designed with convenience and style in mind for modern pouch users.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/20">
                  <feature.icon className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}