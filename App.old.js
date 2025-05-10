import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Colors from './constants/Colors';

// Import screens
import DebtCalculator from './screens/DebtCalculator';
import DebtEducation from './screens/DebtEducation';
import SavingTips from './screens/SavingTips';
import Profile from './screens/Profile';
import ProgressTracking from './screens/ProgressTracking';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  // Dummy debt progress data
  const [progressData, setProgressData] = useState({
    totalDebt: 475000,
    totalPaid: 150000,
    debtFreeDate: 'June 2026',
    monthsSaved: 8
  });

  const progressPercentage = Math.round((progressData.totalPaid / progressData.totalDebt) * 100);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.appTitle}>Dept Disha</Text>
        <Text style={styles.appSubtitle}>Smart Debt Payoff Assistant</Text>
      </View>

      {/* Progress Tracker */}
      <View style={styles.progressSection}>
        <View style={styles.progressHeader}>
          <Text style={styles.progressTitle}>Debt Progress</Text>
          <TouchableOpacity 
            onPress={() => navigation.navigate('ProgressTracking')}
            style={styles.viewDetailsButton}
          >
            <Text style={styles.viewDetailsText}>View Details</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.progressBarContainer}>
          <View style={[styles.progressBar, { width: `${progressPercentage}%` }]} />
        </View>
        <Text style={styles.progressText}>{progressPercentage}% of debt paid off</Text>
        
        <View style={styles.statsContainer}>
          <View style={styles.statsItem}>
            <Text style={styles.statsLabel}>Total Debt</Text>
            <Text style={styles.statsValue}>₹{progressData.totalDebt.toLocaleString()}</Text>
          </View>
          <View style={styles.statsItem}>
            <Text style={styles.statsLabel}>Total Paid</Text>
            <Text style={styles.statsValue}>₹{progressData.totalPaid.toLocaleString()}</Text>
          </View>
          <View style={styles.statsItem}>
            <Text style={styles.statsLabel}>Debt-Free By</Text>
            <Text style={styles.statsValue}>{progressData.debtFreeDate}</Text>
          </View>
        </View>
      </View>

      <View style={styles.dashboardCards}>
        <TouchableOpacity 
          style={styles.card}
          onPress={() => navigation.navigate('DebtCalculator')}
        >
          <View style={[styles.cardIcon, { backgroundColor: '#4CAF50' }]}>
            <Text style={styles.cardIconText}>💰</Text>
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Debt Calculator</Text>
            <Text style={styles.cardDescription}>
              Calculate optimal debt payoff strategies
            </Text>
          </View>
          <Text style={styles.cardArrow}>→</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.card}
          onPress={() => navigation.navigate('DebtEducation')}
        >
          <View style={[styles.cardIcon, { backgroundColor: '#2196F3' }]}>
            <Text style={styles.cardIconText}>📚</Text>
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Debt Education</Text>
            <Text style={styles.cardDescription}>
              Learn about debt management strategies
            </Text>
          </View>
          <Text style={styles.cardArrow}>→</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.card}
          onPress={() => navigation.navigate('SavingTips')}
        >
          <View style={[styles.cardIcon, { backgroundColor: '#FF9800' }]}>
            <Text style={styles.cardIconText}>💡</Text>
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Money-Saving Tips</Text>
            <Text style={styles.cardDescription}>
              Practical tips to help you save money
            </Text>
          </View>
          <Text style={styles.cardArrow}>→</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.card}
          onPress={() => navigation.navigate('Profile')}
        >
          <View style={[styles.cardIcon, { backgroundColor: '#9C27B0' }]}>
            <Text style={styles.cardIconText}>👤</Text>
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>My Profile</Text>
            <Text style={styles.cardDescription}>
              View your profile and track progress
            </Text>
          </View>
          <Text style={styles.cardArrow}>→</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen name="DebtCalculator" component={DebtCalculator} options={{ headerShown: false }} />
        <Stack.Screen name="DebtEducation" component={DebtEducation} options={{ headerShown: false }} />
        <Stack.Screen name="SavingTips" component={SavingTips} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        <Stack.Screen name="ProgressTracking" component={ProgressTracking} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#4CAF50',
    padding: 20,
    paddingTop: 60,
    alignItems: 'center',
  },
  appTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  appSubtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
    marginTop: 5,
  },
  progressSection: {
    backgroundColor: 'white',
    margin: 15,
    marginTop: 20,
    padding: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  progressTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  viewDetailsButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  viewDetailsText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  progressBarContainer: {
    height: 20,
    backgroundColor: '#eeeeee',
    borderRadius: 10,
    marginVertical: 10,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 10,
  },
  progressText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statsItem: {
    flex: 1,
    alignItems: 'center',
  },
  statsLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 5,
  },
  statsValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  dashboardCards: {
    padding: 15,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardIconText: {
    fontSize: 24,
  },
  cardContent: {
    flex: 1,
    marginLeft: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  cardArrow: {
    fontSize: 22,
    color: '#999',
  },
}); 