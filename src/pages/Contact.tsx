import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Layout from "@/components/Layout";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "Free consultation available"],
      primary: true
    },
    {
      icon: Mail,
      title: "Email", 
      details: ["info@weclaim.com", "Response within 4 hours"],
      primary: false
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["123 Legal District", "New York, NY 10001"],
      primary: false
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 2:00 PM"],
      primary: false
    }
  ];

  const practiceAreas = [
    "Personal Injury",
    "Insurance Claims", 
    "Corporate Law",
    "Employment Law",
    "Medical Malpractice",
    "Property Damage",
    "Other"
  ];

  const officeLocations = [
    {
      city: "New York",
      address: "123 Legal District, NY 10001",
      phone: "+1 (555) 123-4567",
      isMain: true
    },
    {
      city: "Los Angeles", 
      address: "456 Business Ave, CA 90210",
      phone: "+1 (555) 234-5678",
      isMain: false
    },
    {
      city: "Chicago",
      address: "789 Commerce St, IL 60601", 
      phone: "+1 (555) 345-6789",
      isMain: false
    }
  ];

  return (
    <Layout showFloatingTeam={false}>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-4">Contact Us</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get Expert Legal Help Today
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss your case? Our experienced legal team is here to help. 
            Contact us for a free consultation and discover your options.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Doe" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="practiceArea">Practice Area *</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a practice area" />
                    </SelectTrigger>
                    <SelectContent>
                      {practiceAreas.map((area) => (
                        <SelectItem key={area} value={area.toLowerCase().replace(/\s+/g, '-')}>
                          {area}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="urgency">Case Urgency</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select urgency level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Not Urgent</SelectItem>
                      <SelectItem value="medium">Moderately Urgent</SelectItem>
                      <SelectItem value="high">Very Urgent</SelectItem>
                      <SelectItem value="emergency">Emergency</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Case Details *</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Please describe your legal issue or case details..." 
                    className="min-h-[120px]"
                    required 
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full btn-hero"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Sending Message...</>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-6 p-4 bg-muted rounded-lg">
                <div className="flex items-center mb-2">
                  <CheckCircle className="h-5 w-5 text-secondary mr-2" />
                  <span className="font-semibold">Free Consultation</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  All initial consultations are completely free. No obligation, no hidden fees.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Get In Touch
              </h2>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <Card key={index} className={`p-6 ${info.primary ? 'border-primary bg-primary/5' : ''}`}>
                    <div className="flex items-start">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                        info.primary ? 'bg-primary text-white' : 'bg-primary/10 text-primary'
                      }`}>
                        <info.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className={`text-sm ${idx === 0 ? 'font-medium' : 'text-muted-foreground'}`}>
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 text-center">
                  <div className="text-2xl font-bold text-primary mb-1">24hrs</div>
                  <div className="text-sm text-muted-foreground">Response Time</div>
                </Card>
                <Card className="p-4 text-center">
                  <div className="text-2xl font-bold text-secondary mb-1">Free</div>
                  <div className="text-sm text-muted-foreground">Consultation</div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Office Locations</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Serving Clients Nationwide
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              With offices across major cities, we're positioned to serve clients throughout the country.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {officeLocations.map((location, index) => (
              <Card key={index} className={`p-6 text-center ${location.isMain ? 'border-primary bg-primary/5' : ''}`}>
                {location.isMain && (
                  <Badge variant="default" className="mb-4">Main Office</Badge>
                )}
                <h3 className="text-xl font-semibold mb-4">{location.city}</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex items-center justify-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">{location.address}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Phone className="h-4 w-4 mr-2" />
                    <span className="text-sm">{location.phone}</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="mt-4">
                  Get Directions
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Need Immediate Legal Assistance?
          </h2>
          <p className="text-lg mb-6 text-white/90 max-w-2xl mx-auto">
            For urgent legal matters that require immediate attention, 
            call our emergency hotline available 24/7.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center bg-white/10 rounded-lg px-4 py-3">
              <Phone className="h-5 w-5 mr-2" />
              <span className="font-semibold">Emergency: +1 (555) 911-HELP</span>
            </div>
            <Button variant="secondary" size="lg">
              Call Emergency Line
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
