import { Kafka } from "kafkajs";
import data from "./data.js";

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"],
});

const producer = kafka.producer();

const runProducer = async () => {
  await producer.connect();

  await producer.send({
    topic: "test-topic",
    messages: [{ value: "Moroccan Universities List" }],
  });

  await producer.disconnect();
};

runProducer();
